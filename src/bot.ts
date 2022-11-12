import { Client } from "discord.js"
import config from "./config"
import * as commandModules from "./commands"

const commands = Object(commandModules)

export const client = new Client({
    intents: ["GUILDS","GUILD_MESSAGES","DIRECT_MESSAGES"],
});

client.once("ready", () => {
    console.log("🤖I am online and ready to listen to commands!");
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) {
        return
    }
    const { commandName } = interaction;
    commands[commandName].execute(interaction, client)
})

client.login(config.DISCORD_TOKEN)