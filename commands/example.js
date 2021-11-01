const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'example',
    description: 'example command',

    async execute(interaction) {

        const HelpEmbed = new MessageEmbed()
            .setTitle(`Embed Title`)
            .setDescription(`Description`)
            .setFooter(`Footer`)
            .setTimestamp()

        const button1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('primary')
                    .setLabel('Primary')
                    .setStyle('PRIMARY'),
            );


        return interaction.reply({ embeds: [HelpEmbed], components: [button1], ephemeral: true });

    },
};
