import fs from "fs/promises";
import { execSync } from "child_process";
import { HasagiClient } from "@hasagi/core";
import { getSwagger, getTypeScript, getExtendedHelp } from "@hasagi/schema";

var TYPESCRIPT_CHANGED = false;
var SWAGGER_CHANGED = false;
var CLIENT_VERSION_CHANGED = false;

const [oldEndpoints, oldTypes, oldEvents, oldSwagger] = await Promise.all([
    fs.readFile("./dist/lcu-endpoints.d.ts", "utf8"),
    fs.readFile("./dist/lcu-types.d.ts", "utf8"),
    fs.readFile("./dist/lcu-events.d.ts", "utf8"),
    fs.readFile("./swagger.json", "utf8")
]);

console.log("Generating schema...");

const { extendedSchema: schema } = await getExtendedHelp(true);
const _swagger = await getSwagger(schema);
const {
    lcuTypes,
    lcuEndpoints,
    lcuEvents,
} = await getTypeScript(_swagger, schema);

await Promise.all([
    fs.writeFile("./dist/lcu-endpoints.d.ts", lcuEndpoints),
    fs.writeFile("./dist/lcu-types.d.ts", lcuTypes),
    fs.writeFile("./dist/lcu-events.d.ts", lcuEvents)
]);

const swagger = JSON.stringify(_swagger, null, 4);
fs.writeFile("./swagger.json", swagger);

const endpoints = lcuEndpoints;
const types = lcuTypes;
const events = lcuEvents;

if (endpoints !== oldEndpoints || types !== oldTypes || events !== oldEvents)
    TYPESCRIPT_CHANGED = true;

if (swagger !== oldSwagger)
    SWAGGER_CHANGED = true;

const client = new HasagiClient();
await client.connect();
const clientVersion = await client.request("get", "/system/v1/builds").then(res => res.version);
const shortVersion = clientVersion.split(".").slice(0, 2).join(".");
const packageObj = JSON.parse(await fs.readFile("./package.json", "utf8"));
CLIENT_VERSION_CHANGED = packageObj._clientVersion !== clientVersion;

console.log(`TypeScript updated: ${TYPESCRIPT_CHANGED}`);
console.log(`Swagger updated: ${SWAGGER_CHANGED}`);
console.log(`Client version changed: ${CLIENT_VERSION_CHANGED}`);

if (CLIENT_VERSION_CHANGED) {
    console.log(`Client version: ${packageObj._clientVersion} -> ${clientVersion}`);
    packageObj._clientVersion = clientVersion;
    if (!packageObj.version.startsWith(shortVersion))
        packageObj.version = shortVersion + ".1";
    
    await fs.writeFile("./package.json", JSON.stringify(packageObj, null, 2));
} else {
    console.log(`Client version: ${clientVersion}`);
}

process.exit();