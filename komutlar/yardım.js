const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `f!banned = Dene ve Gör! \nf!avatarım = Avatarınınızı Gösterir. \nf!herkesebendençay = Herkese Çay Alırsınız. \nf!koş = Koşarsınız.\nf!çayiç = Çay İçersiniz. \nf!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nf!çayaşekerat = Çaya Şeker Atarsınız. \nf!yumrukat = Yumruk Atarsınız. \nf!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nf!sunucuresmi = BOT Sunucunun Resmini Atar. \nf!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nf!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Sunucu Yetkilisi Komutları**", `f!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nf!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nf!unban = İstediğiniz Kişinin Yasağını Açar. \nf!sustur = İstediğiniz Kişiyi Susturur. -MUTED- \nf!oylama = Oylama Açar. \nf!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Botun Ana Komutları**", "f!yardım = BOT Komutlarını Atar. \nf!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nf!ping = BOT Gecikme Süresini Söyler. \nf!davet = BOT Davet Linkini Atar. \nf!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı Komutları:**", " **KOMUTLARI KULLANARAK EĞLENMENİZE BAKIN** ")
  .setFooter('**HabmorFresh.**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
