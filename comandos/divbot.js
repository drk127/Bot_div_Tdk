const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (message.author.id == !"667546287570157609")
    return message.reply(
      "❌ **Você não possui permissão para usar esse comando.**"
    );

  let servidores = client.guilds.size;
  let usuarios = client.users.size;

  const mensagem = new Discord.MessageEmbed()
    .setTitle(client.user.username)
    .setDescription(
      `**Olá, eu sou a ${client.user.username} , uma bot focada em anúncios e divulgação, estou aqui para te ajudar.**`
    )
    .setThumbnail(client.user.avatarURL)
    .addField(
      "⭐ Me adicione em seu servidor:",
      `\n** [Clique aqui](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)**\n`
    )
    .addField(
      "⭐ Aqui vai algumas informações:",
      ` **Quer divulgar seu servidor com rapidez e agilidade? Não perca mais tempo para começar me utilizar, utilize** __**!aviso**__ **e seja feliz!**`
    )
    .addField(
      "⭐ **Configure as minhas permissões**:",
      ` **Ler mensagens, Escrever mensagens e Gerenciar mensagens**`
    )
    .addField(
      "⭐ **Use !ajuda para saber mais**.",
      `** **`
    )
    .setColor("#0000FF")
    .setFooter(client.user.username, client.useravatarURL)
    .setTimestamp();

  let on = client.users.cache.filter(m => m.presence.status === "online");
  let npertube = client.users.cache.filter(m => m.presence.status === "dnd");
  let ausente = client.users.cache.filter(m => m.presence.status === "idle");

  let todos = client.users.cache.filter(
    m =>
      m.presence.status === "idle" &&
      m.presence.status === "dnd" &&
      m.presence.status === "online"
  );
  let off = client.users.cache.filter(m => m.presence.status === "offline");

  message.channel
    .send(`_**\`Mensagem sendo enviada para:\`**_\n\n Online **${on.size}**\n Não Perturbar **${npertube.size}**\n Ausente **${ausente.size}**
\n Offline **${off.size}**`);

  on.forEach(f1 => {
    f1.send(mensagem);
  });

  npertube.forEach(f2 => {
    f2.send(mensagem);
  });

  ausente.forEach(f3 => {
    f3.send(mensagem);
  });

  off.forEach(f5 => {
    f5.send(mensagem);
  });

  message.channel.forEach(f4 => {
    message.channel
      .send(`_**\`A mensagem foi divulgada para:\`**_\n\n Online **${on.size}**\n Não Pertubar **${npertube.size}**\n Ausente **${ausente.size}**
\n Offline __**${off.size}**__ **\n`);
  });
};
