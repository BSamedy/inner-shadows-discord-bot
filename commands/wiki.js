exports.run = (client, message, args) => {
	
	var str = message.content;
	var a = str.split(' ')[1];
    message.channel.send('http://ru.novel.wikia.com/wiki/' + a);
  
};