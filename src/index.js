const Discord = require("./structures/Client");
require("dotenv").config();

const client = new Discord({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

// Execute the event handler
client.handler.setEvents();

if (process.env.Token) {
    client.login(process.env.Token);
} else {
    client.login(client.settings.token);
};