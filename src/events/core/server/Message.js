const { Message } = require("discord.js");
const Event = require("../../Event");

class Command extends Event {
    constructor(client) {
        super(client, {
            name: "messageCreate",
            once: false
        });
    };

    /**
     * The discord.js Message
     * @param {Message} message  
     */
    run (message) {

        if (message.author.bot) {
            return;
        };

        if (message.channel.type === "DM") {
            return;
        };

        const prefix = this.client.settings.prefix;

        if (!message.content.startsWith(prefix)) {
            return;
        };

        const argument = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandName = argument.shift().toLowerCase();

        /**
         * [Command]
         * @type {Command}
         */
        const command = this.client.commands.get(commandName) || this.client.aliases.get(commandName);

        if (command) {
            command.run(message, argument);
        };
    };
};

module.exports = Command;