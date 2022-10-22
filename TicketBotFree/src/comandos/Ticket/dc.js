module.exports = {
    config: {
      nome: 'dc',
      aliases: ['deletarcanal'],
      descricao: 'Comando que deleta o canal.',
      utilizacao: '!dc',
      cooldown: 0
    },
    run: async (client, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Sem permissão')
        message.channel.delete()
        
    }
  }
  