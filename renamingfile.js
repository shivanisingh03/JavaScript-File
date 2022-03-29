// rename file

const fs=require("fs")
fs.rename("./shivi/bio.txt","./shivi/mybio.txt",(err)=>{
    console.log("rename done")
})
