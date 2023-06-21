const { dir } = require("console");
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

const dirCodes = path.join(__dirname, "Codes");
console.log("dircode", dirCodes);
if (!fs.existsSync(dirCodes)) {
  fs.mkdirSync(dirCodes, { recursive: true });
}

const generateFile = async (extension, content) => {
  const jobId = uuid();
  const fileName = `${jobId}.${extension}`;
  const filePath = path.join(dirCodes, fileName);
  await fs.writeFileSync(filePath, content);
  return { filePath, fileName };
};

module.exports = { generateFile };
