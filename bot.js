// Logging into discord =

// require the discord.js module
const Discord = require("discord.js");
const cron = require("cron");

// create a new Discord client
const client = new Discord.Client();

// remote config file where my data is stored
const { prefix, token, channelid, guildid } = require("./config.json");

// Date library of node

// When client is ready, run this:
// This will only run one time after logging in
client.once("ready", () => {
  console.log(`Online as ${client.user.tag}`);
  client.user.setActivity("9help");
  const kalamardo = client.guilds.cache.get(guildid);
  const channel = kalamardo.channels.cache.get(channelid);
  const idukay = "https://idukay.net/#/";
  const coolgif =
    "https://media.discordapp.net/attachments/725628710606077984/780091466231185428/761364271510061136.gif";
  // messages

  const notificationclass = `You have class! GO NOW ${idukay}`;

  const classbreak = "You have a break right now, patience and be calm, enjoy!";
  // send a message if it is the time specified.
  let classnotification1 = new cron.CronJob("00 00 13 * * *", () => {
    channel.send(notificationclass);
  });

  let classnotification2 = new cron.CronJob("00 35 13 * * *", () => {
    channel.send(notificationclass);
  });

  let classnotification3 = new cron.CronJob("00 10 14 * * *", () => {
    channel.send(notificationclass);
  });

  let classnotification4 = new cron.CronJob("00 45 14 * * *", () => {
    channel.send(classbreak);
  });

  let classnotification5 = new cron.CronJob("00 00 15 * * *", () => {
    channel.send(classbreak);
  });

  let classnotification6 = new cron.CronJob("00 35 15 * * *", () => {
    channel.send(notificationclass);
  });

  let classnotification7 = new cron.CronJob("00 10 16 * * *", () => {
    channel.send(notificationclass);
  });

  let classnotification8 = new cron.CronJob("00 45 16 * * *", () => {
    channel.send(classbreak);
  });

  let classnotification9 = new cron.CronJob("00 00 17 * * *", () => {
    channel.send(notificationclass);
  });

  let classnotification10 = new cron.CronJob("00 35 17 * * *", () => {
    channel.send(
      `You have ended your classes for today! enjoy the rest of your day ${coolgif}`
    );
  });
  // When you want to start it, use:
  classnotification1.start();
  classnotification2.start();
  classnotification3.start();
  classnotification4.start();
  classnotification5.start();
  classnotification6.start();
  classnotification7.start();
  classnotification8.start();
  classnotification9.start();
  classnotification10.start();
});

// login to Discord with token
client.login(token);

//const spam = kalamardo.channels.cache.get("814147482719748146");
// creating functions to use

function help() {
  return `
    📌Commands to use class notifier:

    9day =
    Show the classes of the day📆

    9mail =
    It will reply with a gmail's link📫

    9idukay =
    It will reply with a Idukay Link!📝

    9info =
    Information about the project!🚀
  `;
}

// Listening to messages if the client is on
client.on("message", (message) => {
  //declaring variables
  const friday = `
   8:00 am  -- English
   8:35 am  -- English
   9.10 am  -- PPE

   9:45 am  -- Receso

   10:00 am -- PPE
   10:35 am -- English
   11:10 am -- English

   11:45 AM -- Receso

   12:00 am -- Matematica

`;

  const thursday = `
   8:00 am  -- English
   8:35 am  -- English
   9.10 am  -- Quimica

   9:45 AM  -- Receso

   10:00 am -- Historia
   10:35 am -- Matematicas
   11:10 am -- Biologia

   11:45 AM -- Receso

   12:00 am -- Lenguaje

`;

  const wednesday = `
   8:00 am  -- Matematica
   8:35 am  -- Matematica
   9.10 am  -- Quimica

   9:45 AM  -- Receso

   10:00 am -- Biologia
   10:35 am -- English
   11:10 am -- English

   11:45 AM -- Receso

   12:00 am -- Lenguaje

`;

  const tuesday = `
   8:00 am  -- Fisica
   8:35 am  -- Historia
   9.10 am  -- English

   9:45 AM  -- Receso

   10:00 am -- English
   10:35 am -- Filosofia
   11:10 am -- Orientacion Vocacional

   11:45 AM -- Receso

   12:00 am -- Lenguaje

`;

  const monday = `
   8:00 am  -- Fisica
   8:35 am  -- Historia
   9.10 am  -- Emprendimiento y gestion

   9:45 am  -- Receso

   10:00 am -- Emprendimiento y gestion
   10:35 am -- Filosofia
   11:10 am -- English

   11:45 AM -- Receso

   12:00 am -- Lenguaje

`;
  var days = [monday, tuesday, wednesday, thursday, friday];
  const date = new Date();
  const today = date.getDay();
  const hour = date.getHours().toString();
  const minutes = date.getMinutes().toString();
  const time = hour + minutes;
  const gmail = "https://mail.google.com/mail/u/1/?ogbl#inbox";
  const github = "https://github.com/Cattodeveloper909";
  const discordid = "DarthNeder#2142";
  const idukay = "https://idukay.net/#/";

  // Print every message in the server in the console
  console.log(message.content, time);
  // if one of the message is help do this:
  if (message.content === `${prefix}help`) {
    // reply in the same channel from it was sent
    message.channel.send(help());

    // you concatenate messages with the else if block
  } else if (message.content === `${prefix}calendar`) {
    message.channel.send(`There you go! ${calendar}`);
  } else if (message.content === `${prefix}idukay`) {
    message.channel.send(`Voila! ${idukay}`);
  } else if (message.content === `${prefix}mail`) {
    message.channel.send(`Sent! ${gmail}`);
  } else if (message.content === `${prefix}day`) {
    message.channel.send(`Today's scheadule: ${days[today - 1]}`);
  } else if (message.content === `${prefix}info`) {
    message.channel.send(
      `This was made by Said Neder\nGithub: ${github}\nDiscord: ${discordid}`
    );
  }
});
