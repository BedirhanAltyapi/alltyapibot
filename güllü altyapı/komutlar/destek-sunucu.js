const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .addField(`Destek Sunucumuza Katılın!`, `[Tıkla](https://discord.gg/RvPfmr6CCx)`)
.setFooter(client.user.username, client.user.avatarURL())

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destek','sunucu'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "destek-sunucu",
  description: "destek-sunucu",
  usage: "destek-sunucu"
};
