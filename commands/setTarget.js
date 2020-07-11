let discord = require("discord.js")
let fs = require("fs")
module.exports = {
    triggers: ["settarget", "starget", "selecttarget", "selectt"],
    description: "Aims the super ion cannon at one specific guild.",
    run(client = new discord.Client(), args, starget) {
        if (isNaN(args[0])) return console.log("Hey chief! Maybe try to provide a valid guild ID?")
        if (!client.guilds.resolve(args[0])) return console.log("That guild was not found on the guilds list. Try again.")
        console.log("Aimed ION cannon at "+client.guilds.resolve(args[0]).name+"!")
        starget(args[0])
    }
}