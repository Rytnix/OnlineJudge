const express = require("express");

const { errorToJSON, exec } = require("../routes/global");
const fs = require("fs");
const path = require("path");

const runJava = async (filepath, fileName, stdin) => {
  const inputDir =
    "/home/utkarshy/Documents/Online-Judge/OnlineJudge/backend/controller/Codes/";
  const inputFilePath =
    "/home/utkarshy/Documents/Online-Judge/OnlineJudge/backend/controller/Codes/input.txt";

  await fs.writeFileSync(`${inputFilePath}`, stdin);
  console.log(path.resolve(__filename));
  // Running...
  const startTime = new Date();

  let result = await exec(
    "cd " + inputDir + " && java " + fileName + " < input.txt"
  );
  const endTime = new Date();

  const runTime = endTime.getTime() - startTime.getTime();
  result.manualrunTime = runTime;
  return result;
};

const outPath = "../";

const runCpp = async (path, { stdin }) => {
  const osType = os.type().toLowerCase();

  // compiling...
  try {
    if (osCompile.exe.indexOf(osType) >= 0)
      await exec(`g++ ${path} -o assets/code/cpp.exe`);
    else if (osCompile.out.indexOf(osType) >= 0)
      await exec(`g++ ${path} -o assets/code/cpp.out`);
  } catch (err) {
    return errorToJSON(err);
  }

  // Writing stdin into input file
  await fs.writeFileAsync("assets/code/input.txt", stdin);

  // Running...
  let result = null;

  const startTime = new Date();
  if (osCompile.exe.indexOf(osType) >= 0)
    result = await exec("cd assets/code && cpp.exe < input.txt");
  else if (osCompile.out.indexOf(osType) >= 0)
    result = await exec("cd assets/code && ./cpp.out < input.txt");
  const endTime = new Date();

  const runTime = endTime.getTime() - startTime.getTime();
  result.manualrunTime = runTime;
  return result;
};

const runJs = (filename) => {
  exec("node ", (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
};

module.exports = { runCpp, runJava, runJs };
