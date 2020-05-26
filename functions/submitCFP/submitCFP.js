const Discord = require('discord.js')

exports.handler = function (event) {
  const discordID = process.env.discordID;
  const discordTOKEN = process.env.discordTOKEN;

  const client = new Discord.WebhookClient(discordID, discordTOKEN)

  const { name, email, session_length, session_title, session_summary } = JSON.parse(event.body);

  client.send('Received a new CFP submission:')
  client.send(`
    ${name} would like to present on "${session_title}".
    The length of this session is ${session_length}, and ${name} can be reached at ${email}.
    Here is a summary of the talk: "${session_summary}"
  `)

  return {
    statusCode: 200,
    body: ''
  }
}
