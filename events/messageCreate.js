
module.exports=async(bot,message)=>{
     if(message.content.startsWith(bot.config.prefix)){
            let args = message.content.slice(bot.config.prefix.length).trim().split(/ +/g);
            require(`../commands/${args.shift().toLowerCase()}`).execute(bot,message,args);
     }
}