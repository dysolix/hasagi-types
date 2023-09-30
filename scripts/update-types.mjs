import { execSync } from "child_process";
import fs from "fs/promises";
import axios from "axios";
import { HasagiClient } from "@hasagi/core";

var TYPESCRIPT_CHANGED = false;
var SWAGGER_CHANGED = false;
var CLIENT_VERSION_CHANGED = false;

const oldEndpoints = await fs.readFile("./lcu-endpoints.d.ts", "utf8");
const oldTypes = await fs.readFile("./lcu-types.d.ts", "utf8");
const oldEvents = await fs.readFile("./lcu-events.d.ts", "utf8");
const oldSwagger = await fs.readFile("./swagger.json", "utf8");

execSync("hasagi schema --swagger ./ --typescript ./ --tsnamespace LCUTypes");

const endpoints = await fs.readFile("./lcu-endpoints.d.ts", "utf8");
const types = await fs.readFile("./lcu-types.d.ts", "utf8");
const events = await fs.readFile("./lcu-events.d.ts", "utf8");
const swagger = await fs.readFile("./swagger.json", "utf8");

if (endpoints === oldEndpoints && types === oldTypes && events === oldEvents)
    TYPESCRIPT_CHANGED = true;

if (swagger !== oldSwagger)
    SWAGGER_CHANGED = true;

const client = new HasagiClient();
await client.connect();
const region = await client.request({ method: "get", url: "/riotclient/region-locale" });
const version = await axios.get(`https://ddragon.leagueoflegends.com/realms/${region.webRegion}.json`).then(res => res.data.v);
const packageObj = JSON.parse(await fs.readFile("./package.json", "utf8"));
CLIENT_VERSION_CHANGED = packageObj.version !== version;

console.log(`TypeScript updated: ${TYPESCRIPT_CHANGED}`);
console.log(`Swagger updated: ${SWAGGER_CHANGED}`);
console.log(`Client version changed: ${CLIENT_VERSION_CHANGED}`);
console.log(`Current client version: ${version}`);
process.exit();