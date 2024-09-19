const Discord = require('discord.js');
const client = new Discord.Client();
const coins = {};

client.on('ready', () => {
console.log('Bot is ready!');
});

client.on('interactionCreate', async (interaction) => {
if (interaction.commandName === 'free') {
const amount = Math.floor(Math.random() * 100) + 1; // random amount between 1 and 100
const user = interaction.user;
if (!coins[user.id]) coins[user.id] = 0;
coins[user.id] += amount;
interaction.reply(`You got ${amount} coins! Your new balance is ${coins[user.id]}`);
}
});

client.login('YOUR_BOT_TOKEN');