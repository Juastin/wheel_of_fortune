const { REST, Routes } = require('discord.js');
const CLIENT_ID = "1025378087795429376";
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'spin',
    description: 'Spin the wheel!',
  }
];

const rest = new REST({ version: '10' }).setToken('MTAyNTM3ODA4Nzc5NTQyOTM3Ng.GMs7bp.9qENW7h1OSwHjACu_jyUcgTVFCmIt0o6P1howc');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();