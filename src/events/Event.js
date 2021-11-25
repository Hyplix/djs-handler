const Discord = require("../structures/Client");

class Event {
    /**
     * [Event Class]
     * @param {Discord} client - Discord.js Client
     * @param {{ name: string; once?: boolean }} opt - Options for the event. 
     */
    constructor(client, opt) {
        this.client = client;
        this.name = opt.name;
        this.once = opt.once;
    };

    /**
     * Run and do something with the event
     * @param  {...any} args - Evaluated arguments
     * @returns {any}
     */
    run (...args) {
        return;
    };
};

module.exports = Event;