const {MessageEmbed}=require("discord.js")
module.exports={
    name:"help",
    description:"Show command list",
    execute(bot,message,args){
        const embed = new MessageEmbed()
        embed.addField("Commands",`${bot.commands.map(r=>`**${r.name}**\n${r.description}`).join("\n")}`)
        message.channel.send({embeds:[embed]})
    }
}