const zlib = require("zlib");
const path = require("path");
const fs = require("fs");

const fileList = [
  "beehive_membership_20231212.json",
];

fileList.map((e)=>{
    const file = zlib.gzipSync(fs.readFileSync(path.join(__dirname, e)));
    fs.writeFileSync(e + '.gz', file);
})

// const file = zlib.gunzipSync(
//   fs.readFileSync(path.join(__dirname, "beehive_20231106_mem_summary.json.gz"))
// );

// const file2 = fs.readFileSync(path.join(__dirname, "beehive_20231106_mem_summary.json"))

// console.log(file.byteLength)
// console.log(file2.byteLength)