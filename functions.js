const fs = require("fs")
const config = require("./config.json")
function generate_token(length){
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];  
    for (var i=0; i<length; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}
function save_token(){
    const file = fs.readFileSync("./tokens.txt").toString()
    if(file.includes(token)||file.includes(user)){
        
    }
    fs.writeFileSync("./tokens.txt",fs.readFileSync("./tokens.txt"+","+asign_token(user,token)))
}
function asign_token(user,token){
    return {user:user,token:token}
}
function reset_token(user){
    const token = generate_token(config.tokenLenght)
}
module.exports={generate_token}
