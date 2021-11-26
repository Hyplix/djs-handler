const { Message } = require("discord.js");
const Command = require("../../Command");

class Ping extends Command {
    constructor(client) {
        super(client, {
            name: "ping",
            description: "",
            aliases: [],
            category: "general"
        });
    };

    /**
     * 
     * @param {Message} message 
     * @param {string[]} args 
     */
    run (message, args) {
        message.reply({
            content: "Pong!"
        });
    };
};

module.exports = Ping;