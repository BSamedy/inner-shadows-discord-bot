const fs = require('fs');
const { Client, Attachment } = require('discord.js');
exports.run = async (client, message, args, ops) => {

        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./buff_files/moment.mp3');

        /**
         * Create the attachment using Attachment,
         * overwritting the default file name to 'memes.txt'
         * Read more about it over at
         * http://discord.js.org/#/docs/main/stable/class/Attachment
         */
        const attachment = new Attachment(buffer, 'moment.mp3');
        // Send the attachment in the message channel with a content
        message.channel.send(attachment);

};