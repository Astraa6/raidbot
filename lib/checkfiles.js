module.exports=function() {
    let fs = require("fs")
    if (!fs.existsSync("./config")) fs.mkdirSync("./config")
    function createFile(contents,fname) {
        console.log("[!] Configuration file "+fname+" is missing. Creating file...")
        fs.writeFileSync(fname,contents)
    }
    if (!fs.existsSync("./config/auth.rbt")) createFile("token here","./config/auth.rbt")
    // if (!fs.existsSync("./config/allowedUsers.rbt")) createFile("IDOfAuthorizedPerson1,IDOfAuthorizedPerson2,Etc", "./config/allowedUsers.rbt")
}