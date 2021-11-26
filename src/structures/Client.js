const { Client, Collection } = require("discord.js");

const Handler = require("./Handler");
const Util = require("./Util");

class Discord extends Client {
    /**
     * @param {import("discord.js").ClientOptions} options 
     */
    constructor(options) {
        super(options);

        this.commands = new Collection();
        this.aliases = new Collection();

        this.handler = new Handler(this);
        this.util = new Util(this);
        
        this.settings = require("../settings/config.json");
    };

    /**
     * The client token
     * @param {string} token 
     */
    login (token) {
        
        super.login(token);

    };
};

module.exports = Discord;