const Discord = require('discord.js');
const { Client, Attachment } = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const admprefix = '!!';
const fs = require('fs');
const ownerID = fs.readFileSync("ownerID.txt", "utf8");
var log = require('quick.log');

const EventEmitter = require('events');
	class MyEmitter extends EventEmitter {}
	const myEmitter = new MyEmitter();
	myEmitter.on('event', () => {
		console.log('an event occurred!');
		});
	myEmitter.emit('event');
EventEmitter.prototype._maxListeners = 100;

client.on('message', message => {
	
	let args = message.content.slice(prefix.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();
	
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

try {
	
	delete require(`./commands/${cmd}.js`);
	
	let ops = {
		ownerID: ownerID
	}
	
	let commandFile = require(`./commands/${cmd}.js`);
	commandFile.run(client, message, args, ops);
	
	} catch (e) {
		console.log (e.stack);
	}
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	if (~message.content.toLowerCase().indexOf('разум') && ~message.content.toLowerCase().indexOf('ведет') ) {
		message.channel.send('***Разум ведёт!***')};
		
	if (~message.content.toLowerCase().indexOf('горан') || ~message.content.toLowerCase().indexOf('керчва') ) {
		message.channel.send('***МАРК ДАЙН!!!!1!!***')};
		
	if (~message.content.toLowerCase().indexOf('гений')) {
		message.reply('знаете, в последние годы время это слово сильно обесценилось.')};
		
	if (~message.content.toLowerCase().indexOf('шлюха') || (~message.content.toLowerCase().indexOf('проститутка')) || (~message.content.toLowerCase().indexOf('давалка')) || (~message.content.toLowerCase().indexOf('шаболда'))){
		message.reply('***ДЭВОЧКИ! ОНИ ВСЕ – ДЭВОЧКИ!!!!***')};	
		
	if (~message.content.toLowerCase().indexOf('скачать') && (~message.content.toLowerCase().indexOf('вт') )) {
		message.reply('***дорогой друг, весь аудиосериал лежит на rutracker: https://rutracker.org/forum/viewtopic.php?t=5526087 \nРаздача обновляется раз в месяц.***')};

	if (~message.content.toLowerCase().indexOf('скачать') && (~message.content.toLowerCase().indexOf('тени') )) {
		message.reply('***дорогой друг, весь аудиосериал лежит на rutracker: https://rutracker.org/forum/viewtopic.php?t=5526087 \nРаздача обновляется раз в месяц.***')};	
	
	if (~message.content.toLowerCase().indexOf('скачать') && (~message.content.toLowerCase().indexOf('сериал') )) {
		message.reply('***дорогой друг, весь аудиосериал лежит на rutracker: https://rutracker.org/forum/viewtopic.php?t=5526087 \nРаздача обновляется раз в месяц.***')};
	
	if (~message.content.toLowerCase().indexOf('скачать') && (~message.content.toLowerCase().indexOf('роман') )) {
		message.reply('***дорогой друг, весь аудиосериал лежит на rutracker: https://rutracker.org/forum/viewtopic.php?t=5526087 \nРаздача обновляется раз в месяц.***')};

	
	if (~message.content.toLowerCase().indexOf('твк') || (~message.content.toLowerCase().indexOf('тут ведь каааак') )) {
		const buffer = fs.readFileSync('./buff_files/crow.gif');
		const attachment = new Attachment(buffer, 'crow.gif');
		message.channel.send(attachment)};
	
	if (message.content.length > 2000) {
		message.channel.send('@here\nДрузья, человек явно хочет что-то сказать, обратите внимание!')}	
	
	if (message.content.length === 315) {
		message.reply('уведомляю вас, что в вашем сообщении ровно 315 символов.')};	
		
	if (~message.content.toLowerCase().indexOf('удачи') && (~message.content.toLowerCase().indexOf('вам') )) {
		const buffer = fs.readFileSync('./buff_files/redstiker.png');
		const attachment = new Attachment(buffer, 'redstiker.png');
		message.channel.send(attachment)};	
	
	if (~message.content.toLowerCase().indexOf('ну эт не суть') || (~message.content.toLowerCase().indexOf('ну это не суть') )) {
		message.reply('***А суть в том, что всегда есть возможность увеличить количество выпусков Вт на единицу времени! Подписка на Patreon и донаты: \nhttps://www.patreon.com/faland\nhttps://vk.cc/7JY0Ng \n\nНа правах рекламы!***')};	
});

//client.on('message', message => {
	//if (~message.content.toLowerCase().indexOf('горан') || ~message.content.toLowerCase().indexOf('керчва') ) {
	//	message.channel.send('***МАРК ДАЙН!!!!1!!***')};
//});

//client.on('message', message => {
	//if (~message.content.toLowerCase().indexOf('гений')  ) {
	//	message.reply('знаете, в последние годы время это слово сильно обесценилось.')};
//});

//client.on('message', message => {
	//if (~message.content.toLowerCase().indexOf('скачать') && (~message.content.toLowerCase().indexOf('вт') )) {
	//	message.reply('***дорогой друг, весь аудиосериал лежит на rutracker: https://rutracker.org/forum/viewtopic.php?t=5526087 \nРаздача обновляется раз в месяц.***')};
//});
//client.on('message', message => {
//	if (~message.content.toLowerCase().indexOf('скачать') && (~message.content.toLowerCase().indexOf('тени') )) {
	//	message.reply('***дорогой друг, весь аудиосериал лежит на rutracker: https://rutracker.org/forum/viewtopic.php?t=5526087 \nРаздача обновляется раз в месяц.***')};
//});
//client.on('message', message => {
	//if (~message.content.toLowerCase().indexOf('скачать') && (~message.content.toLowerCase().indexOf('сериал') )) {
	//	message.reply('***дорогой друг, весь аудиосериал лежит на rutracker: https://rutracker.org/forum/viewtopic.php?t=5526087 \nРаздача обновляется раз в месяц.***')};
//});
//client.on('message', message => {
	//if (~message.content.toLowerCase().indexOf('скачать') && (~message.content.toLowerCase().indexOf('роман') )) {
	//	message.reply('***дорогой друг, весь аудиосериал лежит на rutracker: https://rutracker.org/forum/viewtopic.php?t=5526087 \nРаздача обновляется раз в месяц.***')};
//});

//client.on('message', message => {
	//if (~message.content.toLowerCase().indexOf('ну эт не суть') || (~message.content.toLowerCase().indexOf('ну это не суть') )) {
	//	message.reply('***А суть в том, что всегда есть возможность увеличить количество выпусков Вт на единицу времени! Подписка на Patreon и донаты: \nhttps://www.patreon.com/faland\nhttps://vk.cc/7JY0Ng \n\nНа правах рекламы!***')};
//});

//client.on('message', message => {
	//if (~message.content.toLowerCase().indexOf('твк') || (~message.content.toLowerCase().indexOf('тут ведь каааак') )) {
	//	const buffer = fs.readFileSync('./buff_files/crow.gif');
//		const attachment = new Attachment(buffer, 'crow.gif');
	//message.channel.send(attachment0)};
//});

//client.on('message', message => {
	//if (~message.content.toLowerCase().indexOf('удачи') && (~message.content.toLowerCase().indexOf('вам') )) {
		//const buffer = fs.readFileSync('./buff_files/redstiker.png');
		//const attachment = new Attachment(buffer, 'redstiker.png');
//	message.channel.send(attachment0)};
//});


//client.on('message', message => {
//	if (~message.content.toLowerCase().indexOf('гений')  ) {
//		message.channel.send('***Гребанный гений!***')};
//});

//client.on('message', message => {
//if (message.content.length === 315) {
//message.reply('уведомляю вас, что в вашем сообщении ровно 315 символов.')};
//});

//client.on('message', message => {
//if (message.content.length > 2000) {
//message.channel.send('@here\nДрузья, человек явно хочет что-то сказать, обратите внимание!')}
//});

client.login(fs.readFileSync("client.login.txt", "utf8"));