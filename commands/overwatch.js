const Overwatch = require(`../modules/overwatch.js`);
module.exports = {
    name: `overwatch`,
    description: `Given any combination of a total of six space separated player names or overwatch roles, assign the player name a role and hero or the overwatch role a new hero. If no arguments are given, command will use any players currently playing Overwatch.`,
    aliases: [`ow`], //other alias to use this command
    usage: `<player name> or <overwatch role>`, //how to use the command
    cooldown: 1, //cooldown on command in seconds
    execute(message, args) {
        if (message.channel.type === `text` && (!args || !args.length)) { //if not a dm and the arguments are empty, get any players currently playing overwatch and use them
            for (const [key, presence] of message.guild.presences.cache) {
                for (const activity of presence.activities) {
                    if (activity.name.trim().toUpperCase() == `OVERWATCH`) {
                        args.push(presence.user.username);
                    }
                }
            }
        }
        message.channel.send(Overwatch.AssignRolesHeroes(args))
            .catch(e => {
                console.error(`overwatch command error sending message for: ${message.guild.name} id: ${message.guild.id}`, e);
            });
    },
};