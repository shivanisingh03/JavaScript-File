// reding data

const fs=require("fs")
fs.readFile("./shivi/bio.txt","utf-8",(err,data)=>{
    console.log(data)
})