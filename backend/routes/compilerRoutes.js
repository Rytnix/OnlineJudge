const router = require("express").Router();
const { generateFile } = require("../controllers/generateFile");

const { errorToJSON, exec } = require("../routes/global");
const { runJava, runCpp, runJs } = require("../controllers/compiler");

const fs = require("fs");
const { resolveObjectURL } = require("buffer");
router.get("/compiler", (req, res) => {
  res.json({ online: "compiler" });
});

router.post("/run", async (req, res) => {
  const { language = "cpp", code } = req.body;
  console.log("lang ", language);
  if (code == undefined) {
    return res
      .status(404)
      .json({ success: false, error: "Code not defined!!!" });
  }

  const { filePath, fileName } = await generateFile(language, code);

  const testcase = fs.readFileSync("controller/Codes/testcase.txt");

  if (language === "java") {
    var result = null;
    try {
      result = await runJava(filePath, fileName, testcase);
    } catch (err) {
      console.log(err);

      res.status(200).send({
        result: "TESTCASE FAILED WITH ERROR ",
        Error: `${errorToJSON(err).err.stderr.substring(
          errorToJSON(err).err.stderr.indexOf("error")
        )}}`,
      });
      return;
    }
    //write restult on file;

    const stdOutput = "controller/Codes/output.txt";
    const originalSol = "controller/Codes/solution.txt";
    fs.writeFileSync(stdOutput, result.stdout.trim());

    console.log("java res is ", result);
    if (
      fs.readFileSync(stdOutput, "utf-8") ===
      fs.readFileSync(originalSol, "utf-8")
    )
      res.status(200).send({
        response: "on java",
        result: "TESTCASE PASSED",
        time: `${result.manualrunTime}`,
      });
    else
      res.status(200).send({
        response: "on java",
        result: "TESTCASE FAILED",
        time: `${result.manualrunTime}`,
      });
  } else if (language == "cpp") {
    console.log(language);
    var result = null;

    result = await runCpp(filePath, fileName, testcase);

    const stdOutput = "controller/Codes/output.txt";
    const originalSol = "controller/Codes/solution.txt";
    fs.writeFileSync(stdOutput, result.stdout.trim());

    if (
      fs.readFileSync(stdOutput, "utf-8") ===
      fs.readFileSync(originalSol, "utf-8")
    )
      res.status(200).send({
        response: "on cpp",
        result: "TESTCASE PASSED",
        time: `${result.manualrunTime}`,
      });
    else {
      if (result.stderr != "") {
        console.log(errorToJSON(result));

        res.status(200).send({
          response: "on cpp",
          result: "TESTCASE FAILED WITH ERROR ",
          Error: `${result.stderr.substring(result.stderr.indexOf("error"))}}`,
        });
      } else {
        res.status(200).send({
          response: "on cpp",
          result: "TESTCASE FAILED",
          time: `${result.manualrunTime}`,
        });
      }
    }
  } else if (language == "js") {
    const result = await runJs(filePath);
    if (result) res.status(200);
    else res.status(400);
  }
});

module.exports = router;
