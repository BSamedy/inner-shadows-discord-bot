exports.run = (client, message, args, ops) => {
	
    if (message.author.id !== ops.ownerID) 
		return message.channel.send('Эй! Ты не администратор!');
	try {
		delete require.cache[require.resolve(`./${args[0]}.js`)];
	} catch (e) {
		return message.channel.send(`Что-то пошло не так. Невозможно перезагрузить ${args[0]}`);
		console.log (e.stack);
	}
	
var msg = message.channel.send(`Успешно перезагружено: ${args[0]}`)
	
	message.delete(200)
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
};