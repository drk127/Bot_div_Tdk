//
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping recebido");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const fs = require("fs");
console.log("♨️ Ligando bot...");
const Discord = require("discord.js");
const client = new Discord.Client({
  autoReconnect: true,
  messageCacheMaxSize: 2024,
  fetchAllMembers: true,
  disabledEvents: ["typingStart", "typingStop", "guildMemberSpeaking"],
  messageCacheLifetime: 1680,
  messageSweepInterval: 1680
});
const config = require("./config.json");
const { Client, Util } = require("discord.js");
var token = config.token;
var prefix = config.prefix;
var dono = config.dono;

client.on("message", message => {
  if (message.channel.type == "dm") return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    if (err.code == "MODULE_NOT_FOUND") return;
    console.error(err);
  }
});

client.on("ready", () => {
  console.log(`O ${client.user.username} Foi iniciado com sucesso! com ${client.users.cache.size} usuário,
    ${client.channels.cache.size} canais e ${client.guilds.cache.size} servidores.`);
  let status = [
    {
      name: `F4OURS7VEN Mestre Das Divs`,
      type: 1,
      url: "https://youtube.com"
    }
  ];

  function setStatus() {
    let randomStatus = status[Math.floor(Math.random() * status.length)];
    client.user.setPresence({ game: randomStatus });
  }
  setStatus();
  setInterval(() => setStatus(), 5000);
});

client.login(token);
