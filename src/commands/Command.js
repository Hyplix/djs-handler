const { Message } = require("discord.js");
const Discord = require("../structures/Client");

const interface = {
    name: "",
    description: "",
    aliases: []
};

class Command {
    /**
     * [Class Command]
     * @param {Discord} client - Discord.js client
     * @param {interface} opt - Command options
     */
    constructor(client, opt) {
        this.client = client;
        this.name = opt.name;
        this.description = opt.description;
        this.aliases = opt.aliases;
    };

    /**
     * Run the command and do stuffs
     * @param {Message} message - Discord.js Message
     * @param {string[]} args - Arguments[]
     * @returns 
     */
    run (message, args) {
        return;
    };
};

module.exports = Command;