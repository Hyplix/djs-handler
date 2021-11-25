const Event = require("../../Event");

class Ready extends Event {
    constructor(client) {
        super(client, {
            name: "ready",
            once: true
        });
    };
    
    run () {
        console.log(this.client.user.username + " is ready");
    };
};

module.exports = Ready;