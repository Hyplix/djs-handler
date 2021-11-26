const { Client, Collection } = require("discord.js");

const Handler = require("./Handler");
const Util = require("./Util");

class Discord extends Client {
    /**
     * @param {import("discord.js").ClientOptions} options 
     */
    constructor(options) {
        super(options);

        /**
         * The djs collection for the commands
         * @type {Collection}
         */
        this.commands = new Collection();

        /**
         * The djs collection for the aliases
         * @type {Collection}
         */
        this.aliases = new Collection();
        
        /**
         * The djs collection for the slashes
         * @type {Collection}
         */
        this.slashes = new Collection();

        /**
         * The handler class for the client
         * @type {Handler}
         */
        this.handler = new Handler(this);

        /**
         * The util class for the client
         * @type {Util}
         */
        this.util = new Util(this);
        
        /**
         * The setting/config file
         */
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