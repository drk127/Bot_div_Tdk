const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message, args) => {
  const ajuda = new Discord.MessageEmbed()
    .setTitle(
      `🔧 Confira meus comandos !ajuda:`
    )
    .setDescription(
      `> ⭐  \`!aviso\` (msg) - Manda um aviso a todos do seu servidor \n` +
        `> ⭐ \`!avisoembed\` | titulo | descrição | link de foto ou gif | \n` +
        `Manda um aviso em embed a todos do seu servidor \n` +
        `\`Exemplo:\` [Clique aqui](http://prntscr.com/o8pluq)\n` +
        `Obs: não tire os separadores | \n` +
        `> ⭐ \`!ping\` - Mostra o ping do bot \n` +
        `> ⭐ \`a!cc\` - Cria convite permanente do servidor \n` +
        `> ⭐ \`!ajuda\` - Para mais informações \n`
    )
    .setThumbnail(client.user.avatarURL)
    .setColor("BLACK")
    .setFooter(message.author.tag, message.author.avatarURL)
    .setTimestamp();

  message.channel.send(ajuda);
};
