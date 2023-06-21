const router = require("express").Router();
const { generateFile } = require("../controller/generateFile");

const { exec, spawn } = require("node:child_process");

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
  res.json({ filePath });
});

module.exports = router;
