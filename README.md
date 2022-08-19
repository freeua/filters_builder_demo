# Filters Builder Component Demo

> [🔗 filters-builder-demo.vercel.app](https://filters-builder-demo.vercel.app/)

<!-- ![screenshot](assets/screenshot-v2.png) -->

## Run the project locally

```bash
yarn && yarn dev
```

or

```bash
npm install && npm run dev
```

Go to [localhost:3000](http://localhost:3000/) to see the result

## Local usage of filters-builder lib

After you have modified a component or just generated a `.tgz` file from [this repository](https://github.com/freeua/filters_builder), create a folder in your project where you will store your local libraries (ex: `packages`).

Then install it:

```bash
yarn add ./<path-to-packages>/<file-name>.tgz
```

or

```bash
npm i ./<path-to-packages>/<file-name>.tgz
```

## Operator Functions

Implemented json-rule-engine testing in [src/engine.ts](./src/engine.ts) and operator evaluators are placed in [src/utils/operatorEvaluators.ts](./src/utils/operatorEvaluators.ts)

Notice that **nested facts rules not developed**, please check [this issue](https://github.com/CacheControl/json-rules-engine/issues/7) to add this functionality to your project
