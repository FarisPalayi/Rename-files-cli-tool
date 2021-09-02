const { readdir, rename } = require("fs/promises");
const path = require("path");
const { createInterface } = require("readline");

const rl = createInterface({ input: process.stdin, output: process.stdout}, err => new Error(err));

process.stdout.write("\n Remove keywords from filename.\n")

rl.question(`\nKeyword to remove from the filename? eg: min\n`,
  keyword => {
    if (keyword) {
      removeFromFileName(keyword)
      rl.close();
    } else {
      rl.write("Invalid input");
    }
  }
)

async function _allFiles(folderPath) {
  return await readdir(folderPath, "utf-8")
    .then((file) => file)
    .catch((err) => console.log("Error reading file names \n", err));
}

async function _rename(folderPath, file, keyword) {
  const fullFilePath = path.join(folderPath, file);
  const newFileName = file.replace(keyword, "");
  const newFilePath = path.join(folderPath, newFileName);

  if (file.includes(keyword)) {
    await rename(fullFilePath, newFilePath)
      .then(() => process.stdout.write(`${file} ►▶ ${newFileName} ✅\n`))
      .catch((err) => console.log("Error renaming files \n", err));
  }
}