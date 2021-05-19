// Logging into discord =

// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// remote config file where my data is stored
const { prefix, token} = require('./config.json');

// Date library of node

// When client is ready, run this:
// This will only run one time after logging in
client.once('ready', () => {
  console.log(`Online as ${client.user.tag}`)
  client.user.setActivity("9help");
});

// login to Discord with token
client.login(token);

// creating functions to use

function help() {
  return `
    📌Commands to use class notifier:

    9day =
    Show the classes of the day📆

    9mail =
    It will reply with a gmail's link📫

    9calendar =
    It will reply with a calendar's link📅

    9idukay =
    It will reply with a Idukay Link!

    9{class} =
     it will show the class link📝

           📚classes code📚
      · 9mf -> Matematica y Fisica📘
      · 9hi -> Historia📒
      · 9fi -> Filosofia📒
      · 9in -> Ingles📘
      · 9pe -> Participacion Estudiantil📓
      · 9qu -> Quimica📗
      · 9bi -> Biologia📗
      · 9le -> Lenguaje📖

     9info =
     Information about the project!😄
  `
};


// Listening to messages if the client is on
client.on('message', message => {

//declaring variables
const friday = `
   8:00 am  | English
   8:35 am  | English
   9.10 am  | PPE

   9:45 am  | Receso

   10:00 am | PPE
   10:35 am | English
   11:10 am | English

   11:45 AM | Receso

   12:00 am | Matematica

`;

const thursday = `
   8:00 am  | English
   8:35 am  | English
   9.10 am  | Quimica

   9:45 AM  | Receso

   10:00 am | Biologia
   10:35 am | English
   11:10 am | English

   11:45 AM | Receso

   12:00 am | Lenguaje

`;

const wednesday = `
   8:00 am  | Matematica
   8:35 am  | Matematica
   9.10 am  | Quimica

   9:45 AM  | Receso

   10:00 am | Biologia
   10:35 am | English
   11:10 am | English

   11:45 AM | Receso

   12:00 am | Lenguaje

`;

const tuesday = `
   8:00 am  | Fisica
   8:35 am  | Historia
   9.10 am  | English

   9:45 AM  | Receso

   10:00 am | English
   10:35 am | Filosofia
   11:10 am | Orientacion Vocacional

   11:45 AM | Receso

   12:00 am | Lenguaje

`;

const monday = `
   8:00 am  | Fisica
   8:35 am  | Historia
   9.10 am  | English

   9:45 am  | Receso

   10:00 am | English
   10:35 am | Filosofia
   11:10 am | English

   11:45 AM | Receso

   12:00 am | English

`;
var days = ["miau" ,monday, tuesday, wednesday, thursday, friday]
const date = new Date();
const today = date.getUTCDay();
const calendar = "https://calendar.google.com/calendar/u/1/r";
const gmail = "https://mail.google.com/mail/u/1/?ogbl#inbox";
const idukay = "https://idukay.net/#/";
const fima = "https://us02web.zoom.us/j/86383851648?pwd=cHJuWlF5SzhtTEVkNHBXTklVeWVKdz09";
const lenguaje = "https://us02web.zoom.us/j/84889661094?pwd=d09BTnBCNnhxcVRBcjlOcTNCWjZMUT09";
const ingles = "https://us02web.zoom.us/j/89070656633?pwd=dkd2N1pHN2MwY0hPSGxUSUNHTmx4Zz09";
const biologia = "https://us02web.zoom.us/j/85602162510?pwd=WEJER0dlQ2FhRHpMcmdrUzdkdk8zQT09";
const quimica = "https://us02web.zoom.us/j/88295123683?pwd=YWFEWlhLby9TdGVnMGExaDdKSUhSQT09";
const ppe = "https://us02web.zoom.us/j/83234363737?pwd=RDRwL3RsVUwyM1poVTZHNmN5dldidz09";
const historia = "https://us02web.zoom.us/j/82231633269?pwd=NU54MFhlSlRiU0Z5WDdBY0FoUlpVdz09";
const filosofia = "https://us02web.zoom.us/j/89834737741?pwd=d3Yweks5TFF5VFArMVNOZW1ZTmMwdz09";
const github = "https://github.com/Cattodeveloper909";
const discordid = "DarthNeder#2142";
// Print every message in the server in the console
  console.log(message.content);

// if one of the message is help do this:
   if (message.content === `${prefix}help`) {

// reply in the same channel from it was sent
      message.channel.send(help());

// you concatenate messages with the else if block
  } else if (message.content === `${prefix}calendar`) {

        message.channel.send(`There you go! ${calendar}`)

  } else if (message.content === `${prefix}idukay`) {
        message.channel.send(`Voila! ${idukay}`)

  } else if (message.content === `${prefix}mail`) {
        message.channel.send(`Sent! ${gmail}`)

  } else if (message.content === `${prefix}mf`) {
        message.channel.send(`Math class: ${fima}`)

  } else if (message.content === `${prefix}hi`) {
        message.channel.send(`History class: ${historia}`)

  } else if (message.content === `${prefix}fi`) {
        message.channel.send(`Philosophy class: ${filosofia}`);

  } else if (message.content === `${prefix}qu`) {
        message.channel.send(`Chemistry class: ${quimica}`);

  } else if (message.content === `${prefix}bi`) {
        message.channel.send(`Biology class: ${biologia}`);

  } else if (message.content === `${prefix}le`) {
        message.channel.send(`Spanish class: ${lenguaje}`);

  } else if (message.content === `${prefix}in`) {
        message.channel.send(`English class: ${ingles}`);

  } else if (message.content === `${prefix}pe`) {
        message.channel.send(`PPE class: ${ppe}`);

  } else if (message.content === `${prefix}day`) {
        message.channel.send(`Today's scheadule: ${days[today]} `)

  } else if (message.content === `${prefix}info`) {
        message.channel.send(`This was made by Said Neder\nGithub: ${github}`)

  };

});
