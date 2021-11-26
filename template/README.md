# Template
Here is the reference of how your files should be like in order to work properly.

<br>

## Events
```js
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
```

## Commands
```js
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
```