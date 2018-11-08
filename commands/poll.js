const Discord = require('discord.js');
//const { Client, Attachment } = require('discord.js');

exports.run = async (client, message, args, ops, tools) => {
if (message.author.id != ops.ownerID) return message.channel.send('Эй! Ты не администратор!');
if (!args[0]) {return message.channel.send('Напоминаю тебе, дурная башка, что голосование запускается так: <префикс>poll тема голосования')}
else {

	poll_msg = message.content.split('$')[1];
	var reaction = ["\u0030\u20E3","\u0031\u20E3","\u0032\u20E3","\u0033\u20E3","\u0034\u20E3","\u0035\u20E3", "\u0036\u20E3","\u0037\u20E3","\u0038\u20E3","\u0039\u20E3","\u2705\u20E3"]
	var n = message.content.split('var=')[1];
	n = n.split('$')[0];
	n = +n;
	if (!!n == false) {
		message.reply('С такими данными нельзя создать опрос!');	}
	else {
		var a = 1;
		const embed = new Discord.RichEmbed()
			.setColor(0xffffff)
			.setTimestamp()
			.setFooter('Выбирайте с умом')
			.setDescription(poll_msg)
			.setTitle('Голосование по квесту');

		let msg = await message.channel.send(embed);
		while (n > 0) {
			await msg.react(reaction[a]);
			a++;
			n--;
			};

		message.delete(50)
			.then(msg => console.log(`Deleted message from ${msg.author.username}`))
			.catch(console.error);
		}};
};

  
//var time = ["F567"]
//await msg.react(reaction[2]);
//await msg.react('🕧');
//await msg.react('⚙');
//await msg.react(time[0]);
  
//const embed = new Discord.MessageEmbed()
//	.setColor(0xffffff)
//	.setFooter('React to vote.')
//	.setDescription(args.join(' '))
//	.setTitle('Poll Created By ' + message.author.username);

//let msg = await message.channel.send(embed);

//await msg.react(':one:');
//await msg.react(':two:');

//message.delete({timeout: 100});
