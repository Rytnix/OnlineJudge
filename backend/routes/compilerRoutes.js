const router = require("express").Router();
const { generateFile } = require("../controller/generateFile");
const { runJava } = require("../controller/compiler");

const fs = require("fs");
router.get("/compiler", (req, res) => {
  res.json({ online: "compiler" });
});

router.post("/run", async (req, res) => {
  const { language = "cpp", code } = req.body;
  if (code == undefined) {
    return res
      .status(404)
      .json({ success: false, error: "Code not defined!!!" });
  }

  const { filePath, fileName } = await generateFile(language, code);
  console.log(fileName);
  const testcase = "5 \n 1 2 3 4 5";
  var result = null;
  try {
    result = await runJava(filePath, fileName, testcase);
  } catch (err) {
    console.log(err);
    res.status(500).send({ Result: "Compile Error" });
    return;
  }
  //write restult on file;
  const stdoutpath =
    "/home/utkarshy/Documents/Online-Judge/OnlineJudge/backend/controller/Codes/output.txt";
  const testcasepath =
    "/home/utkarshy/Documents/Online-Judge/OnlineJudge/backend/controller/Codes/testcase.txt";
  fs.writeFileSync(stdoutpath, result.stdout.trim());

  console.log("java res is ", result);
  if (
    fs.readFileSync(stdoutpath, "utf-8") ===
    fs.readFileSync(testcasepath, "utf-8")
  )
    res.status(200).send({
      filePath: `$j{filePath}`,
      Result: "TEST CASE PASSED",
      Output: `${result.stdout}`,
    });
  else
    res.status(400).send({
      filePath: `$j{filePath}`,
      Result: "TEST CASE FAILED",
      Output: `${result.stdout}`,
    });
});

module.exports = router;
