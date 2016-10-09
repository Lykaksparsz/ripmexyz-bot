const Discord = require("discord.js");
const Client = new Discord.Client();
const Tokens = "YOUR BOT TOKEN HERE"
const BotID = "YOUR BOT ID HERE"

Client.on("message", message => {
	if (message.content) {
		console.log("[" + message.author.username + "]: " + message.content);
	}
	if (message.content.startsWith("ripme/")) {
		const argz = message.content.substr(6);
		if (message.content.match("<@")) {
			message.channel.sendMessage("No mentions, emojis pls!");
			return;
		}
		message.channel.sendMessage("https://ripme.xyz#" + argz);
	}
	if (message.content.startsWith("ripme/credits")) {
		message.channel.sendMessage("Created by lykakspars! :heart:");
	}
});

Client.login(Tokens)
