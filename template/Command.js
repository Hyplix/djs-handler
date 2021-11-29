const Command = require("...");

class Name extends Command {
    constructor(client) {
        super(client, {
            name: "",
            description: "",
            aliases: [],
            category: "",
            cooldown: 0,
            slash: {
                name: "",
                description: "",
                enableDM: false
            }
        });
    };

    run (message, args) {
        // Start coding
    };
};

module.exports = Name;