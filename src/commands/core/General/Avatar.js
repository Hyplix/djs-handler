const { Message, CommandInteraction } = require("discord.js");
const Command = require("../../Command");

class Avatar extends Command {
    constructor(client) {
        super(client, {
            name: "avatar",
            description: "Get your or a user avatar",
            aliases: ["av"],
            category: "general",
            cooldown: 5,
            slash: {
                name: "avatar",
                description: "Get your or a user avatar",
                enableDM: false,
                options: [
                    {
                        type: "USER",
                        name: "member",
                        description: "Select the member to get his avatar",
                        required: false
                    }
                ]
            }
        });
    };

    /**
     * @param {Message} message
     * @param {string[]} args
     */
    run (message, args) {

        const member = message.mentions.members.first() || message.member;

        return message.reply({
            embeds: [
                {
                    title: member.displayName,
                    color: "BLUE",
                    image: {
                        url: member.user.displayAvatarURL({ dynamic: true, size: 2048 })
                    },
                    footer: {
                        text: message.member.user.username,
                        iconURL: message.member.user.displayAvatarURL({ dynamic: true, size: 2048 })
                    }
                }
            ]
        });
    };

    /**
     * @param {CommandInteraction} i
     */
    interact (i) {

        const member = i.options.getMember("member", false) || i.member;

        return i.reply({
            embeds: [
                {
                    title: member.displayName,
                    color: "BLUE",
                    image: {
                        url: member.user.displayAvatarURL({ dynamic: true, size: 2048 })
                    },
                    footer: {
                        text: i.member.user.username,
                        iconURL: i.member.user.displayAvatarURL({ dynamic: true, size: 2048 })
                    }
                }
            ]
        });
    };
};

module.exports = Avatar;