import { execSync } from "child_process";
import fs from "fs/promises";
import { HasagiClient } from "@hasagi/core";

var TYPESCRIPT_CHANGED = false;
var SWAGGER_CHANGED = false;
var CLIENT_VERSION_CHANGED = false;

const oldEndpoints = await fs.readFile("./lcu-endpoints.d.ts", "utf8");
const oldTypes = await fs.readFile("./lcu-types.d.ts", "utf8");
const oldEvents = await fs.readFile("./lcu-events.d.ts", "utf8");
const oldSwagger = await fs.readFile("./swagger.json", "utf8");

console.log("Generating schema...");
execSync("npm run generate");

const endpoints = await fs.readFile("./lcu-endpoints.d.ts", "utf8");
const types = await fs.readFile("./lcu-types.d.ts", "utf8");
const events = await fs.readFile("./lcu-events.d.ts", "utf8");
const swagger = await fs.readFile("./swagger.json", "utf8");

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
    packageObj.version = shortVersion + ".1";
    await fs.writeFile("./package.json", JSON.stringify(packageObj, null, 2));
} else {
    console.log(`Client version: ${clientVersion}`);
}

process.exit();