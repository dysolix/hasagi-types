# @hasagi/types

Auto-generated TypeScript types for the League Client Update (LCU) API — definitions for the LCU
endpoints, their request/response shapes, and WebSocket events.

The repository also hosts the accompanying `swagger.json` OpenAPI schema, which you can browse
interactively in [Swagger UI](https://swagger.dysolix.dev/lcu/).

These are the same generated types used by [`@hasagi/core`](https://www.npmjs.com/package/@hasagi/core)
(re-exported there under `@hasagi/core/types`); this package ships them standalone for type-only use.

## Installation

```bash
npm install --save-dev @hasagi/types
```

A `devDependency` is enough for consuming code — the package ships type declarations only, no runtime
code. Skip it entirely if you're already on `@hasagi/core` (see above).

If you're authoring a library that re-exports these types in its own public `.d.ts`, use a regular
`dependency` instead — npm doesn't install a package's `devDependencies` for its downstream consumers,
so a `devDependency` re-export would break for anyone installing your library without also installing
`@hasagi/types`.

## Usage

The package is type-only — import the definitions you need:

```ts
import type { LolSummonerSummoner } from "@hasagi/types";

// or the whole generated set under a namespace
import type { LCUTypes } from "@hasagi/types";
```

## Versioning

The package's `major.minor` follows League of Legends's own `major.minor` (e.g. `16.13.x` types were
generated against a client on patch `16.13`). The trailing patch number is a plain semver patch — it
bumps for whatever needed releasing while the client stayed on that minor version (usually a type
regeneration, but just as often a script/tooling fix, packaging fix, etc.), and resets to `1` once the
client moves to a new minor. It does **not** mirror the client's own build number.

For the exact client build the types were generated from, check `_clientVersion` in `package.json`
(e.g. `16.13.789.3741`).

## Updating the types

1. **Clone the repo**

   ```bash
   git clone https://github.com/dysolix/hasagi-types.git
   cd hasagi-types
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the update script**

   ```bash
   npm run update-types
   ```

## Disclaimer

Hasagi is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or
anyone officially involved in producing or managing Riot Games properties. Riot Games and all
associated properties are trademarks or registered trademarks of Riot Games, Inc.
