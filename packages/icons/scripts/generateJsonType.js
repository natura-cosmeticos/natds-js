/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const JsonToTS = require("json-to-ts");
const jsonFile = require("../src/natds-icons.json");

const result = JsonToTS(jsonFile);
let data = "/* eslint-disable max-lines,quotes */\n";

result.forEach((typeInterface) => {
  data = data.concat(typeInterface);
});
data = data.concat("\ndeclare const styles : RootObject;\n\nexport = styles;\n");

const filePath = path.resolve(__dirname, "..", "src", "natds-icons.json.d.ts");

fs.writeFile(filePath, data, (error) => {
  if (error) {
    throw error;
  }
  // eslint-disable-next-line no-console
  console.info("SUCCESS Done writing JSON module file.");
});
