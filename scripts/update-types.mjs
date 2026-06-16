import fs from "fs/promises";
import crypto from "crypto";
import { HasagiClient } from "@hasagi/core";
import { getSwagger, getTypeScript, getExtendedHelp } from "@hasagi/schema";

function hash(content) {
    return crypto.createHash("sha256").update(content).digest("hex");
}

async function writeIfChanged(filePath, newContent) {
    let oldContent;
    try {
        oldContent = await fs.readFile(filePath, "utf8");
    } catch {
        // File doesn't exist yet — treat as changed
        await fs.writeFile(filePath, newContent);
        return true;
    }

    if (hash(newContent) === hash(oldContent)) return false;

    await fs.writeFile(filePath, newContent);
    return true;
}

async function main() {
    console.log("Generating schema...");

    let schema, _swagger, lcuTypes, lcuEndpoints, lcuEvents;
    try {
        const { extendedSchema } = await getExtendedHelp(true);
        schema = extendedSchema;
        _swagger = await getSwagger(schema);
        ({ lcuTypes, lcuEndpoints, lcuEvents } = await getTypeScript(_swagger, schema));
    } catch (err) {
        console.error("Failed to generate schema:", err.message);
        process.exit(1);
    }

    const swagger = JSON.stringify(_swagger, null, 4);

    // Barrel so the generated types can be imported by name from a single entry point.
    // The `LCUTypes` namespace re-export preserves backwards compatibility with older @hasagi/types versions.
    const lcuIndex = `export * from "./lcu-types";\nexport * from "./lcu-endpoints";\nexport * from "./lcu-events";\nexport * as LCUTypes from "./lcu-types";\n`;

    const [endpointsChanged, typesChanged, eventsChanged, indexChanged, swaggerChanged] = await Promise.all([
        writeIfChanged("./dist/lcu-endpoints.d.ts", lcuEndpoints),
        writeIfChanged("./dist/lcu-types.d.ts", lcuTypes),
        writeIfChanged("./dist/lcu-events.d.ts", lcuEvents),
        writeIfChanged("./dist/index.d.ts", lcuIndex),
        writeIfChanged("./swagger.json", swagger),
    ]);

    const TYPESCRIPT_CHANGED = endpointsChanged || typesChanged || eventsChanged || indexChanged;
    const SWAGGER_CHANGED = swaggerChanged;

    let CLIENT_VERSION_CHANGED = false;
    let clientVersion;
    try {
        const client = new HasagiClient();
        await client.connect();
        clientVersion = await client.request("get", "/system/v1/builds").then(res => res.version);
    } catch (err) {
        console.error("Failed to connect to LCU client:", err.message);
        process.exit(1);
    }

    const packageObj = JSON.parse(await fs.readFile("./package.json", "utf8"));
    CLIENT_VERSION_CHANGED = packageObj._clientVersion !== clientVersion;

    console.log(`TypeScript updated:     ${TYPESCRIPT_CHANGED}`);
    console.log(`Swagger updated:        ${SWAGGER_CHANGED}`);
    console.log(`Client version changed: ${CLIENT_VERSION_CHANGED}`);

    if (CLIENT_VERSION_CHANGED) {
        const shortVersion = clientVersion.split(".").slice(0, 2).join(".");
        console.log(`Client version: ${packageObj._clientVersion} -> ${clientVersion}`);
        packageObj._clientVersion = clientVersion;
        if (!packageObj.version.startsWith(shortVersion))
            packageObj.version = shortVersion + ".1";

        await fs.writeFile("./package.json", JSON.stringify(packageObj, null, 2));
    } else {
        console.log(`Client version: ${clientVersion} (unchanged)`);
    }

    process.exit(0);
}

main();