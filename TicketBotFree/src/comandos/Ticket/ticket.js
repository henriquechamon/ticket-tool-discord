const Client = require('discord.js')
const mysql = require('mysql'); 
const { conexaodb, userdb, senhadb, db } = require("../../../config.json")

const connection = mysql.createPool({
connectionLimit : 10, //Info da database, para conectar
    host: conexaodb,
    user: userdb,
    password: senhadb,
    database: db
  });
  

module.exports = {
    config: {
      nome: 'ticket',
      aliases: ['openticket'],
      descricao: 'Comando abre solicitacao de ticket',
      utilizacao: '',
      cooldown: 300
    },

    run: async (client, message, args) => {
        message.delete();
        connection.query("SELECT * FROM bot_cfg", async (err, result, fields) =>{
            if (err) throw err;
        const id_categoria_ticketc = client.channels.cache.get(result[0].id_categoria_ticket);
        const canal_tickets_recebidosc = client.channels.cache.get(result[0].canal_tickets_recebidos);

        const membro = message.author;
        const numeroticket = Math.floor(Math.random() * 999);
        let guild = message.guild;
            const channel2 = await guild.channels.create(`📫ticket-${membro}`,{
            type: 'text',
            parent: id_categoria_ticketc,
            permissionOverwrites:[
                {
                    allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','EMBED_LINKS','ATTACH_FILES','SEND_MESSAGES'],
                    id: message.author.id
                },
                {
                    deny: 'VIEW_CHANNEL',
                    id: guild.id
                }
            ]
        }); 

const embed2 = new Client.MessageEmbed()
.setColor("#7289DA")//COR DA CAIXA DE DIALOGO
.addField('Solicitação criada!', `Olá, ${membro}. Aguarde, em  breve  um staff irá te atender =D`)
.setThumbnail(membro.displayAvatarURL())
.setURL(membro.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
.setTimestamp(new Date())
.setFooter(`Sistema feito por Aligg#1000`, `${result[0].imgwl}`)

channel2.send(embed2)



});
    }
    
}
