const Client = require('discord.js')
const mysql = require("mysql");
const { conexaodb, userdb, senhadb, db } = require("../../../config.json")

const connection = mysql.createPool({
connectionLimit : 10,
  host: conexaodb,
  user: userdb,
  password: senhadb,
  database: db
});


module.exports = async (client, member) => {
   connection.query("SELECT * FROM bot_cfg", async (err, result, fields) =>{

    const embed2 = new Client.MessageEmbed()
     .setColor("#7289DA")//COR DA CAIXA DE DIALOGO
     .addField('Bem vindo!', `Olá, ${member} seja bem vindo ao nosso servidor! Dê uma olhada nas regras, hein =)\nFaça sua whitelist em <#${result[0].canal_fazer_whitelist}>`)
     .setThumbnail(member.user.displayAvatarURL())
     .setURL(member.user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
     .setTimestamp(new Date())
     .setFooter(`Sistema feito por Aligg#0001`, 'https://cdn.discordapp.com/icons/1014932760865017876/f52226b90006082a9e91a2396de0a0df.png?size=2048')
     
     const canalentradac = client.channels.cache.get(result[0].canal_boas_vindas);

     canalentradac.send(embed2)

    member.guild.channels.cache.get(result[0].canal_boas_vindas).send(embed2)


       member.roles.add(result[0].nonwhitelistcargo)
      });
    }

    