let database = require('croxydb')
let ayarlar = require("../ayarlar.json")



exports.run = async(client, message) => {
  if(!message.member.hasPermission(`ADMINISTRATOR`)) return message.channel.send(`Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.`)
  
  let yrol = message.mentions.roles.first()
  if(!yrol) return message.channel.send(`Bir rol etiketlemen gerekmekte örnek: ${ayarlar.prefix}abonerol @rol`)
  

  database.set(`yrol.${message.guild.id}`, yrol.id)
  message.channel.send(`Yetkili rolü başarıyla ${yrol} olarak ayarlandı.`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili-rol'],
  perm: 0
}
exports.help = {
  name: 'yetkilirol'
}

exports.play = {
  kullanım: 'abonerol @rol',
  açıklama: 'Abone Rolünü Ayarlarsınız',
  kategori: 'Abone'
}