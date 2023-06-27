const express = require("express");
const os = require("os");
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

const osCompile = {
  exe: ["windows_nt"],
  out: ["darwin", "linux"],
};
const runCpp = async (path, filename, stdin) => {
  const osType = os.type().toLowerCase();
  console.log(osType);
  // compiling...
  try {
    if (osCompile.exe.indexOf(osType) >= 0)
      await exec(`g++ ${path} -o controller/Codes/cpp.exe`);
    else if (osCompile.out.indexOf(osType) >= 0)
      await exec(`g++ ${path} -o controller/Codes/cpp.out`);
  } catch (err) {
    return err;
  }

  // Writing stdin into input file
  await fs.writeFileSync("controller/Codes/input.txt", stdin);
  console.log("hello");
  // Running...
  let result = null;

  const startTime = new Date();
  if (osCompile.exe.indexOf(osType) >= 0)
    result = await exec("cd controller/Codes && cpp.exe < input.txt");
  else if (osCompile.out.indexOf(osType) >= 0)
    result = await exec("cd controller/Codes  && ./cpp.out < input.txt");
  const endTime = new Date();

  const runTime = endTime.getTime() - startTime.getTime();
  result.manualrunTime = runTime;
  console.log("I am in cpp", result);
  return result;
};

const runJs = async (filepath) => {
  console.log("hello");
  exec(
    "node " + `${filepath}` + " < controller/Codes/input.txt",
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
      return stdout;
    }
  );
};

module.exports = { runCpp, runJava, runJs };
