const zlib = require("zlib");
const path = require("path");
const fs = require("fs");

const fileList = [
  "beehive_membership_20231213.json",
];

fileList.map((e)=>{
    const file = zlib.gzipSync(fs.readFileSync(path.join(__dirname, e)));
    fs.writeFileSync(e + '.gz', file);

    //log mem length
    // const mem = JSON.parse(fs.readFileSync(e));
    // console.log(mem['mem'].length);
})
