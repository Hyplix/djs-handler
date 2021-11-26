const Client = require("./Client");
const Event = require("../events/Event");
const Command = require("../commands/Command");

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
                return;
            };

            const event = new file(this.client);

            if (!(event instanceof Event)) {
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

    setCommands() {

        const commands = glob.sync(this.client.settings.handler.commands);

        for (let i = 0; i < commands.length; i++) {

            const file = require(path.resolve(commands[i]));

            if (!checkClass(file)) {
                return;
            };

            const command = new file(this.client);

            if (!(command instanceof Command)) {
                return;
            };

            if (command.name) {
                this.client.commands.set(command.name, command);
            };

            if (command.aliases && Array.isArray(command.aliases)) {
                command.aliases.forEach((x) => {
                    this.client.aliases.set(x, command);
                });
            };
        };
    };

    setSlashes() {

        const commands = glob.sync(this.client.settings.handler.commands);
        const array = [];

        for (let i = 0; i < commands.length; i++) {

            const file = require(path.resolve(commands[i]));

            if (!checkClass(file)) {
                return;
            };

            const command = new file(this.client);

            if (!(command instanceof Command)) {
                return;
            };

            if (!command.slash.name && !command.slash.description) {
                return;
            };

            array.push(command.slash);
            this.client.slashes.set(command.slash.name, command);
        };

        // For Development
        const guild = this.client.guilds.cache.get(this.client.settings.guildId);
        if (guild) {
            guild.commands.set(array);
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