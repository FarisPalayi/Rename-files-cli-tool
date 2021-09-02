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