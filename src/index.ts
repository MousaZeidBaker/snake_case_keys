import "snakecase-keys";

import * as fs from "fs";
import * as path from "path";
import snakecaseKeys from "snakecase-keys";

const objRaws = fs.readFileSync(
  path.resolve(__dirname, "../src/object.json"),
  "utf8"
);
const obj = JSON.parse(objRaws);

console.log(JSON.stringify(snakecaseKeys(obj)));
