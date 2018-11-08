exports.run = (client, message, args, ops) => {
	
	function getRandomInt(min, max)
		{
			return Math.floor(Math.random() * (max - min + 1)) + min;
		};
	
	if (~message.content.toLowerCase().indexOf('d'.toLowerCase())) {
		var str = message.content.toLowerCase().split('!roll ')[1];
		console.log (str);
		var d_0 = str.split('d')[0];
		var d = +d_0;
		console.log (d);
		if (d_0 == 0) {
				d_0 = 1;
				var d_n = str.split('d')[1];
				var d0 = +d_n;
				console.log (d);
		
				if (!!d0 == false) {
					message.reply('Хорошая шутка, но нет.');
				}
				else if (d_n == 1 || d_n == 0) 
				{ message.reply('Хорошая шутка, но нет.');
				}
				else {
				var roll = [];
				while (d_0 > 0) {
					roll.push(getRandomInt(1,d_n));
					d_0--;
					};
				message.reply(roll);
			};
		}
		else if (!!d == false) {
			message.reply('Это - не игральная кость!');
			}
		else if (d > 20) {
			message.reply('Поумерьте аппетиты!');
			}	
		else {
		var d_n = str.split('d')[1];
		var d0 = +d_n;
		console.log (d);
		
		if (!!d0 == false) {
			message.reply('Хорошая шутка, но нет.');
		}
		else if (d_n == 1 || d_n == 0) 
			{ message.reply('Хорошая шутка, но нет.');
			}
		else {
			var roll = [];
			while (d_0 > 0) {
				roll.push(':game_die: ' + getRandomInt(1,d_n));
				d_0--;
				};
			console.log (roll [0]);
			message.reply('\n' + roll);
			};
		};
	}	
	else {
	return message.reply('Введите количество кубов и количество граней.');
	};
};
			//if (typeof d_0 != "number")
			//{ message.reply('Это не игральная кость!')
			//}
			//else 
	//(message.content.charAt(message.content.toLowerCase().indexOf('d'.toLowerCase()) - 1));
	//(message.content.charAt(message.content.toLowerCase().indexOf('d'.toLowerCase()) + 1));
