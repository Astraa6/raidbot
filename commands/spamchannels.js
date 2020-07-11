let discord = require("discord.js")
let fs = require("fs")
module.exports = {
    triggers: ["spamchannels"],
    description: "Spams x amount of channels in selected guild.",
    run(client = new discord.Client(), args, starget, ctarget) {
        if (!ctarget) return console.log("Please select a server to destroy.")
        if (!client.guilds.resolve(ctarget)) return console.log("The guild the cannon was aimed to is invalid. Did the bot get removed from the server or did you manipulate the files?")
        if (!Number(args[0])) return console.log("Please provide a valid amount of channels to spam.")
        if (!args[1]) return console.log("Please provide a channel name.")
        let guild = client.guilds.resolve(ctarget)
        for(i=0;i<Number(args[0]);i++) {
            guild.channels.create(args.slice(1).join("-"))
        }
        console.log(args[0]+" channels created.")
    }
}