const express = require("express");
const { exec, spawn } = require("node:child_process");

const runJava = (filename) => {
  exec(`java ${filename}`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
};

const runCpp = () => {
  exec("my.bat", (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
};

const runJs = () => {
  exec("my.bat", (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
  });
};

module.export = { runCpp, runJava, runJs };
