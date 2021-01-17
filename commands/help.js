const Discord = require("discord.js");
const config = require("../settings/config.json");

module.exports.run = async (client, message, args) => {
  let ertassla = new Discord.MessageEmbed()
    .setAuthor(client.user.username + " Commands")
    .setColor(config.cyan)
    .setDescription(
      `**Avatar: 
Profilinizi gösterir veya etiketlediğiniz kişinin profilini gösterir.** \`[!pp]\`\n\n**Play: Verilen ad veya url ile bir şarkı çalar. ** \`[!play]\`\n\n**Now Playing: Botun o anda hangi şarkıyı çaldığını gösterir. ** \`[!np]\`\n\n**Pause: Şu anda çalan parçayı duraklatır. **\`[!pause]\`\n\n**Resume: Duraklatılan müziği devam ettirin. **\`[!resume]\`\n\n**Stop:Şarkıyı durdurur**\`[!stop]\`\n\n**Skip: O anda çalan şarkıyı atlar. **\`[!skip]\`\n\n**Queue: Sırayı görüntüleyin. **\`[!queue]\`\n\n** Botun istatistiklerini gösterir.**\`[!stats]\`\n\n**Invite: Links. **\`[!invite]\`\n\n**Clean: Belirtilen miktarda mesajı siler.** }\`[!clean]\``
    )
    .setFooter(`Bfk Bot`, `${client.user.avatarURL()}`)
    .setTimestamp();
  message.channel.send(ertassla);
};
module.exports.help = {
  name: "help",
  aliases: []
};
