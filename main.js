if (!require("./lib/checkmodules")(["discord.js", "chalk"])) return;
require("./lib/checkfiles")()
let discord = require("discord.js")
let fs = require("fs")
let chalk = require("chalk")
let client = new discord.Client()
let token = fs.readFileSync("./config/auth.rbt", "utf8")
// let users = fs.readFileSync("./config/allowedUsers.rbt","utf8").split(",").filter(a => !isNaN(a));
// console.log(users)
// if (!users[0]) return console.log("There are no valid users in ./config/allowedUsers.rbt. Maybe try adding someone?"),process.exit();
let target = null;
function setTarget(channelid) {
    target = channelid;
}
function info(text) {
    console.log(chalk `{cyan [I]} ${text}`)
}
function warn(text) {
    console.log(chalk`{yellowBright [!]} {yellowBright ${text}}`)
}
function error(text) {
    console.log(chalk `{red [!!]} {redBright ${text}}`)
}
info(chalk `Attempting login with token {cyanBright ${token}}...`)
client.login(token).catch(err => {
    error(chalk `Couldn't login. Cause: \n  L ${err.toString().split("\n").join("\n  L ")}`)
})
client.on("ready", function () {
    info(`Logged in!\n  Username: ${client.user.tag}\n  User ID: ${client.user.id}\n  Server count: ${client.guilds.cache.size}\n  Vulnerable servers: ${client.guilds.cache.filter(a => {return a.me.hasPermission("ADMINISTRATOR")}).size}`)
    // info(chalk`Allowed users:\n  ${users.map(a => "D"+a).join("\n  ")}`)
    process.stdout.write(chalk `{cyan ${target||"NONE"}}{cyanBright >}`)
    process.stdin.on("data",function(data) {
        processCmd(data.toString())
    })
})
let cmdlineCmds = [];
fs.readdirSync("./commands").filter(a => a.endsWith(".js")).forEach(b => {
    try {
        cmdlineCmds.push(require("./commands/"+b))
    } catch {}
})
function processCmd(inp) {
    // process.title = inp;
    let args = inp.trim().split(/ +/g)
    let command = args.shift().toLowerCase();
    let cmdf = cmdlineCmds.find(a => a.triggers.includes(command))
    if (!cmdf) warn("That command was not found to be valid. Run 'help' for assistance.")
    else cmdf.run(client,args,setTarget,target)
    process.stdout.write(chalk`{cyan ${target||"NONE"}}{cyanBright >}`)
}