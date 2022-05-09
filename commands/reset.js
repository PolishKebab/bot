const {generate_token}=require("../functions")
module.exports={
    name:"reset",
    description:"Reset your token",
    exeute(bot,message,args){
        const newToken = generate_token(bot.config.tokenLenght)
    }
}