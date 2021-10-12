const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
    console.log("Estoy listo!");
 });
 
 client.on("message", (message) => {
   if(message.content.startsWith("ping")) {
     message.channel.send("pong!");
   }
 
 });
 
 client.login("ODk3NTQ3MTkyNTgyMTQ4MTI3.YWXP9g.HIRLV9mg4-cSr0k6MWTz5fDx5gE");