const { Interaction } = require("discord.js");

const Command = require("../../../commands/Command");
const Event = require("../../Event");

class Slash extends Event {
    constructor(client) {
        super(client, {
            name: "interactionCreate",
            once: false
        });
    };

    /**
     * @param {Interaction} interaction 
     */
    run (interaction) {

        if (!interaction.isCommand()) {
            return;
        };

        const name = interaction.commandName;

        /**
         * @type {Command}
         */
        const command = this.client.slashes.get(name);

        if (command.slash.enableDM !== true) {
            if (interaction.channel.type === "DM") {
                return
            };
        };

        if (command) {
            command.interact(interaction);
        };
    };
};

module.exports = Slash;