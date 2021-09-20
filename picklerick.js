const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        message.channel.send('@everyone i turned myself into a pickle!.');
        message.delete();

    } catch(e) {

        console.log(e.stack);

    }
}

module.exports.help = {

    name: "picklerick",
    desc: "Mentions everyone.",

}
