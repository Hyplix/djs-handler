const Command = require("...");

class Name extends Command {
    constructor(client) {
        super(client, {
            name: "",
            description: "",
            aliases: []
        });
    };

    run (message, args) {
        // Start coding
    };
};

module.exports = Name;