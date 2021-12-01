const { Message } = require("discord.js");

const Event = require("../../Event");
const CMD = require("../../../commands/Command");

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
    run(message) {

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
         * @type {CMD}
         */
        const command = this.client.commands.get(commandName) || this.client.aliases.get(commandName);

        if (command) {

            // For Developer only command
            if (command.developer && command.developer === true) {

                if (!this.client.util.checkifDev(message.author.id)) {
                    return;
                };

            };

            // For cooldown of the comamand
            const cooldown = this.client.cooldown.get(message.author.id, command);

            if (cooldown) {
                const timeRemain = this.client.cooldown.getRemaining(message.author.id, command, true);

                return message.reply({
                    content: `**${message.author.username}** | Command is on \`${timeRemain}secs\` cooldown.`
                }).catch(() => {
                    return;
                });
            };

            this.client.cooldown.add(message.author.id, command);
            
            // Execute the command
            command.run(message, argument);
        };
    };
};

module.exports = Command;