# snake-case-keys

Converts JSON keys to snake_case

Given the following JSON object:
```
[
  {
    "CamelCase": "I will be converted",
    "snake_case": "I am already snake case",
    "values": "areNotConverted",
    "nestedKeys": {
      "willBe": "converted as well"
    }
  }
]
```

will be converted to:
```
[
  {
    "camel_case": "I will be converted",
    "snake_case": "I am already snake case",
    "values": "areNotConverted",
    "nested_keys": {
      "will_be": "converted as well"
    }
  }
]
```

## Getting started

1. Install dependencies

`yarn install`

2. Copy the `src/object.example.json` file and paste your JSON object to it

`cp src/object.example.json src/object.json`

3. Compile TypeScript to JavaScript

`yarn run build`

4. Convert to snake case

`node dist/index.js`


The output is JSON stringified, can be used together with [jq](https://stedolan.github.io/jq/) to beautify the output

`node dist/index.js | jq .`

The output can be copied to the clipboard as follows

`node dist/index.js | jq . | xclip -selection clipboard`
