const fs=require("fs")
// creating a new file

fs.writeFileSync("read.txt","hello i am coder of the navgurukul")
fs.writeFileSync("read.txt","i am shivani and  hello i am coder of the navgurukul")


// appending txt in files



fs.appendFileSync("read.txt","\n hiiiiiiiiiiiiiiiiiii")



// for reading data on terminal shell

const buf_data=fs.readFileSync("read.txt")
console.log(buf_data)

// {/* <Buffer 69 20 61 6d 20 73 68 69 76 61 6e 69 20 61 6e 64 20 20 68 65 6c 6c 6f 20 69 20 61 6d 20 63 6f 64 65 72 20 6f 66 20 74 68 65 20 6e 61 76 67 75 72 75 6b ... > */}
 
const buf_data1=fs.readFileSync("read.txt")
org_data=buf_data1.toString()
console.log(org_data)





// rename file

fs.renameSync("read.txt","readwrite.txt")
fs.unlink("readwrite.txt")
