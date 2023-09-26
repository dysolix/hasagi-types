import { execSync } from "child_process";
import fs from "fs/promises";
import axios from "axios";
import { HasagiClient } from "@hasagi/core";

const oldEndpoints = await fs.readFile("./lcu-endpoints.d.ts", "utf8");
const oldTypes = await fs.readFile("./lcu-types.d.ts", "utf8");
const oldEvents = await fs.readFile("./lcu-events.d.ts", "utf8");

execSync("hasagi schema --typescript ./ --tsnamespace LCUTypes");

const endpoints = await fs.readFile("./lcu-endpoints.d.ts", "utf8");
const types = await fs.readFile("./lcu-types.d.ts", "utf8");
const events = await fs.readFile("./lcu-events.d.ts", "utf8");

if(endpoints === oldEndpoints && types === oldTypes && events === oldEvents){
    console.log("Detected no changes.")
    process.exit();
}

console.log("Detected changes.");

const client = new HasagiClient();
await client.connect();
const region = await client.request({ method: "get", url: "/riotclient/region-locale" });
const version = await axios.get(`https://ddragon.leagueoflegends.com/realms/${region.webRegion}.json`).then(res => res.data.v);
const packageObj = JSON.parse(await fs.readFile("./package.json", "utf8"));
console.log(packageObj.version === version ? "Client version did not change." : "Client version has changed.")
console.log("Current client version: " + version)