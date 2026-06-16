# @hasagi/types

Auto-generated TypeScript types for the League Client Update (LCU) API — type definitions for the LCU
endpoints, their request/response shapes, and WebSocket events. The accompanying `swagger.json`
OpenAPI schema is also hosted in this repository.

These are the same generated types used by [`@hasagi/core`](https://www.npmjs.com/package/@hasagi/core)
(re-exported there under `@hasagi/core/types`); this package ships them standalone for type-only use.

## Installation

```bash
npm install --save-dev @hasagi/types
```

## Usage

The package is type-only — import the definitions you need:

```ts
import type { LolSummonerSummoner } from "@hasagi/types";

// or the whole generated set under a namespace
import type { LCUTypes } from "@hasagi/types";
```

## Versioning

The package version tracks the League client version it was generated from (see `_clientVersion` in
`package.json`), so `npm install @hasagi/types@<major.minor>` pins types to a specific client release
line.

## Updating the types

If you've cloned the repository and want to regenerate the types, run the following while the League
client is open:

```bash
npm run update-types
```

## Disclaimer

Hasagi is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or
anyone officially involved in producing or managing Riot Games properties. Riot Games and all
associated properties are trademarks or registered trademarks of Riot Games, Inc.
