const Event = require("...");

class Name extends Event {
    constructor(client) {
        super(client, {
            name: "",
            once: false
        });
    };

    run () {
        // Start coding
    };
};

module.exports = Name;