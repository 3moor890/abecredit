const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("573803991142629386")
setInterval(function() {
channel.send(`#we need credit #we need credit #we need credit #we need credit cv#we need credi= `);
}, 30)
})

client.login(process.env.BOT_TOKEN);