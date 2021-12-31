var colors = require('colors/safe');
const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
  if (!["901766822599196742"].includes(message.author.id))
    return message.channel.send("❌ **Você não tem permissão.**");

  let mensagem = args.join(" ");
  if (talkedRecently.has(message.author.id)) {
    let embed = new Discord.RichEmbed()
      .setColor(0x00a2e8)
      .setAuthor(
        "❌ **Utilize o comando, daqui 10 minutos. Eu também mereço descanso**...",
        message.author.avatarURL
      )
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/611372548378329109/619361601203601409/l5ft4b5sh1pr.gif"
      )
      .setImage(
        "https://cdn.discordapp.com/attachments/636703795648135168/640763221694742604/6d78711d7c8438405ee8a5a50114f9ac.gif"
      )
      .setTimestamp()
      .setFooter(message.author.username, message.author.avatarURL);
    message.channel
      .send({ embed })
      .then(msg => msg.delete(8000))
      .catch(() => {});
    let flow = message.guild.channels.find(`name`, "logs");
    if (!flow)
      return message.channel.send(
        "🔧 **caso queira que eu envie o log/enviar em um canal, crie um chamado** `logs`"
      );
    //
    message.delete();
  } else {
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      //
      talkedRecently.delete(message.author.id);
    }, 600000);

    if (!mensagem)
      return message.reply({
        embed: { title: "Global", description: "informe uma mensagem!" }
      });
    let servidores = client.guilds.cache.size;
    let usuarios = client.users.cache.size;

    await client.users.cache.forEach(f => {
      f.send(`${mensagem}`);
    }),
      message.channel.send(
        `**${message.author} sua mensagem está sendo enviada. Confira status:**`
      );
    //para __${usuarios}__ usuários em __${servidores}__ servidores.**`).then(msg => msg.react("✔"))
    let embed = new Discord.MessageEmbed()
      .setTitle("    **Divulgar Para Todos** ")
      .addField(" **Servidores:** ", `${servidores}`)
      .addField(" **Membros totais:** ", `${usuarios}`)
      .addField(" **Sua mensagem:** ", `${mensagem}`)
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/649408990970642442/651518055654096896/tenor_3.gif"
      );
    message.channel.send(embed).catch(() => {});
    console.log(colors.red('enviando mensagem para todos')
    // message.delete();
    //.catch(msg => msg.delete(5000))
    //.catch(msg => msg.delete(500))
  }
};
