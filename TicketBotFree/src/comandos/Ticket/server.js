const Discord = require("discord.js");

module.exports = {
  config: {
    nome: 'servidores',
    aliases: ['servers', 's'], 
    descricao: 'Servidores.',
    utilizacao: '!s',
    cooldown: 3                                               
  },

  run: async (client, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Sem permissão')
	

let arg1 = args.slice().join(" ")


const embed = new Discord.MessageEmbed()
    .setTitle(`Servidores em que estou on-line:white_check_mark:`)
    .setColor("#1ddbbf")
    .setDescription(`**{guilds}**`)
	
    .setFooter(`Sistema feito por Aligg#0002`);
  message.channel.send(embed);
  }
}
