const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
let prefix = ayarlar.prefix
exports.run = async(client , message, args) =>{
    const tinkie = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setTitle(`Yardım Komutları`)
    .setDescription(`
${prefix}başlat ÇekilişKanal Süre KazananSayısı Çekilişİsmi
${prefix}bitir <mesajid>
${prefix}reroll <mesajid>
    `)
    .setThumbnail(`${message.author.avatarURL()}`)
    message.channel.send(tinkie)
};

exports.conf = {
  aliases: ['help'],
  permLevel: 0,
};
exports.help = {
  name: 'yardım',
   description: 'Çekilişi Sonlandırır.',
  usage: 'end <mesajID>'
};
