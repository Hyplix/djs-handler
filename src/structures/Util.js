const Discord = require("./Client");

class Util {
    /**
     * The discord.js client
     * @param {Discord} client 
     */
    constructor(client) {
        /**
         * @private
         */
        this.client = client;
    };
};

module.exports = Util;