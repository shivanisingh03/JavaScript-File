// deleting file 

const fs=require("fs")
fs.unlink("./shivi/mybio.txt",(err)=>{
    console.log("file deleted")
})
