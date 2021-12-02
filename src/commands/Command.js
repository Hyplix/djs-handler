const { Message } = require("discord.js");
const Discord = require("../structures/Client");

const interface = {
    name: "",
    description: "",
    aliases: [],
    category: "",
    cooldown: 5,
    developer: false,
    /**
     * @type {import("discord.js").ApplicationCommandDataResolvable | {enableDM?: boolean}}
     */
    slash: {}
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
        this.description = opt.description || "";
        this.aliases = opt.aliases || [];
        this.category = opt.category || "";
        this.cooldown = opt.cooldown || 0;
        this.developer = opt.developer || false;
        this.slash = opt.slash || { name: null, description: null, enableDM: false };
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

    interact (interaction) {
        return;
    };
};

module.exports = Command;