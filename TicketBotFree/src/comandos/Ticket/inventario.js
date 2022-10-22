const Discord = require("discord.js");
const mysql = require("mysql");
const { conexaodb, userdb, senhadb, db } = require("../../../config.json")

const connection = mysql.createPool({
connectionLimit : 10,
  host: conexaodb,
  user: userdb,
  password: senhadb,
  database: db
});



module.exports = {
  config: {
    nome: 'laddinventario',
    aliases: ['inventario', 'ladinv'], 
    descricao: 'Adicionar liçença de inventario!',
    utilizacao: '.inventario [user] [ip]',
    cooldown: 3                                               
  },
  run: async (client, message, args) => {
    connection.query("SELECT * FROM bot_cfg", async (err, result3, fields) =>{


message.delete({timeout:1000});
let Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
let Script = "aligg_inventario";
if(!args[0]) return message.reply("Você não citou o user!").then(m => m.delete({timeout: 5000}));
if(!args[1]){

    return message.reply("Você não colocou o ip!");
}



  var sql = `INSERT INTO aliggshop (user, ip, script) VALUES ('${Member.user.username}#${Member.user.discriminator}', '${args[1]}','aligg_inventario')`;
  client.guilds.cache.get(result3[0].idsv).members.cache.get(Member.user.id).roles.add(result3[0].adelle)
  connection.query(sql, async (err, result5) =>{

const embed = new Discord.MessageEmbed()
    .setTitle(`Liçenca adicionada a ${args[0]} `)
    .setColor("#FFFFF")
    .setDescription(`Liçenca enviada para o cliente!`)
  message.channel.send(embed);
//  JOGADOR

  const embeduser = new Discord.MessageEmbed()
  .setTitle(`Agradecemos pela preferência! =)`)
  .setColor("#FFFFF")
  .setDescription(`Obrigado por adquirir aligg_inventario com a aligg shop!`)
  .setFooter(`Agradecemos pela compreensão. Atenciosamente, Aligg Shop!`);
  Member.user.send(embeduser);
});

    
})
}
}

