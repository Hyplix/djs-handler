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

    /**
     * Method for checking if command run by developer
     * @param {string} id 
     * @returns {boolean}
     */
    checkifDev(id) {

        /**
         * Array of developers
         * @type {string[]} - Should be array
         */
        const array = process.env.developerIds || this.client.settings.developerIds;

        if (id && array && Array.isArray(array)) {

            const res = array.includes(String(id));

            return res;

        } else {
            return false;
        };
    };
};

module.exports = Util;