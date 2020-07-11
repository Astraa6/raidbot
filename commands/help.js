let discord = require("discord.js")
let fs = require("fs")
module.exports = {
    triggers:["help","man","manual","?"],
    description:"Lists all available command line commands.",
    run(client,args) {
        console.log("All available commands")
        fs.readdirSync("./commands").filter(a => a.endsWith(".js")).forEach(b => {
            let file = require("./"+b)
            console.log(` ${file.triggers[0]} (${file.triggers.slice(1).join(", ")}): ${file.description}`)
        })
    }
}