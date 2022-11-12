import { SlashCommandBuilder } from "@discordjs/builders"
import { CommandInteraction } from "discord.js"

export const data = new SlashCommandBuilder()
    .setName("badge")
    .setDescription("Wait 24Hrs to redeem the badge!")

export async function execute(interaction: CommandInteraction) {
    return interaction.reply("Now wait 24 hrs to Apply for badge at \`https://discord.com/developers/active-developer\`")
}
