const {Client, Collection} = require("discord.js")
const fs = require("fs")
const ints = require("./intents.json")
const bot = new Client({intents:[ints]})
bot.config = require("./config.json")
const commandFiles = fs.readdirSync("./commands")
bot.commands=[]
bot.tokens = fs.readFileSync("tokens.txt").toString().split(",")
console.log(bot.tokens)
for(let command of commandFiles){
    const cmd = require(`./commands/${command}`)
    cmd.name=cmd.name||command.split(".")[0]
    cmd.description=cmd.description||"Not set"
    bot.commands.push({name:cmd.name,description:cmd.description})
}
bot.login(bot.config.token)
for(let r of fs.readdirSync('./events')){
    (async()=>{
        bot.on(r.split('.')[0],(...arr)=>require(`./events/${r}`)(bot,...arr))
    })();
}