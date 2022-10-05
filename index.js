const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'spin') {
    await interaction.reply('The wheel is spinning');
  }
});

client.login('MTAyNTM3ODA4Nzc5NTQyOTM3Ng.GMs7bp.9qENW7h1OSwHjACu_jyUcgTVFCmIt0o6P1howc');
