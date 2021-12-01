const { Collection } = require("discord.js");

class Cooldown {
    constructor () {
        this.cache = new Collection();
    };

    /**
     * Add a user to the cooldown
     * @param {string} userId - The id of the user
     * @param {*} command - The class of the command
     */
    add (userId, command) {

        if (!userId || !command) {
            throw new TypeError("Missing params on cooldown [add]");
        };

        if (!this.cache.get(command.name)) {
            this.cache.set(command.name, new Collection());
        };

        const cmd = this.cache.get(command.name);
        const time = (command.cooldown) * 1000;

        cmd.set(userId, Date.now());
        setTimeout(() => {
            this.delete(userId, command);
        }, time);
    };

    /**
     * Get the cooldown status of the user
     * @param {string} userId - The id of the user
     * @param {*} command - The class of the command
     * @returns {boolean}
     */
    get (userId, command) {

        const cmd = this.cache.get(command.name);

        if (cmd && cmd.has(userId)) {
            const expire = cmd.get(userId) + (command.cooldown) * 1000;

            if (Date.now() < expire) {
                return true;
            } else {
                return false;
            };
        };

        return false;
    };

    /**
     * Get the cooldown remaining time of the user
     * @param {number} userId - The id of the user
     * @param {*} command - The class of the command
     */
    getRemaining (userId, command) {

        const cmd = this.cache.get(command.name);
        const user = cmd.get(userId) + (command.cooldown) * 1000;

        if (cmd && user) {
            const remain = (user - Date.now()) / 1000;

            return remain.toFixed(0);
        };

        return null;
    };

    /**
     * Delete a user from cooldown
     * @param {string} userId - The id of the user
     * @param {*} command - The class of the command
     */
    delete (userId, command) {
        const cmd = this.cache.get(command.name);

        if (cmd && cmd.get(userId)) {
            cmd.delete(userId);
        };
    };
};

module.exports = Cooldown;