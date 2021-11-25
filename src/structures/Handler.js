const Client = require("./Client");
const Event = require("../events/Event");

const glob = require("glob");
const path = require("path");

class Handler {
    /**
     * The discord.js client
     * @param {Client} client 
     */
    constructor(client) {
        this.client = client;
    };

    setEvents() {

        const events = glob.sync(this.client.settings.handler.events);

        for (let i = 0; i < events.length; i++) {

            const file = require(path.resolve(events[i]));

            if (!checkClass(file)) {
                return console.log("Not exports a class");
            };

            const event = new file(this.client);

            if (!(event instanceof Event)) {
                console.log("henlo")
                return;
            };

            if (event.name) {
                this.client[event.once ? "once" : "on"](
                    event.name, (...args) => {
                        event.run(...args)
                    }
                );
            };
        };
    };
};

/**
 * Property to check if the required file exports a class
 * @param {*} file - The required file
 * @returns {any}
 */
function checkClass(file) {
    return typeof file === "function"
        && typeof file.prototype === "object"
        && file.toString().substring(0, 5) === "class";
};

module.exports = Handler;