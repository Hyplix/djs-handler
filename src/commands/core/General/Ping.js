const { Message, CommandInteraction } = require("discord.js");
const Command = require("../../Command");

class Ping extends Command {
    constructor (client) {
        super(client, {
            name: "ping",
            description: "The ping of the bot",
            aliases: ["pong"],
            category: "general",
            cooldown: 10,
            slash: {
                name: "ping",
                description: "The ping of the bot",
                enableDM: true
            }
        });
    };

    /**
     * @param {Message} message 
     * @param {string[]} args 
     * @returns 
     */
    run (message, args) {

        const heartbeat = this.client.ws.ping;
        const response = Date.now() - message.createdTimestamp;
        const total = heartbeat + response;

        return message.reply({
            embeds: [
                {
                    title: "š Pong!",
                    description: `ā±ļø | Response: \`${response}ms\`\nā¤ļø | Heartbeat: \`${heartbeat}ms\`\nāāāāāāāāāāāāāāāāā\nTotal: \`${total}ms\``,
                    color: 5814783
                  }
            ]
        }).catch(() => {
            return;
        });
    };

    /**
     * @param {CommandInteraction} i 
     */
    interact (i) {

        const heartbeat = this.client.ws.ping;
        const response = Date.now() - i.createdTimestamp;
        const total = heartbeat + response;

        return i.reply({
            embeds: [
                {
                    title: "š Pong!",
                    description: `ā±ļø | Response: \`${response}ms\`\nā¤ļø | Heartbeat: \`${heartbeat}ms\`\nāāāāāāāāāāāāāāāāā\nTotal: \`${total}ms\``,
                    color: 5814783
                  }
            ]
        }).catch(() => {
            return;
        });
    };
};

module.exports = Ping;