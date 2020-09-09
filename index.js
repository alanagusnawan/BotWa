// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const { time } = require('console');
const { networkInterfaces } = require('os');
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var now = new Date();
var day = days[ now.getDay() ];
var mynumber = ['62895350311179@c.us'];
var i;

venom.create().then((client) => start(client));

function start(client) {
  for(i=0;i<mynumber.length;i++){
  if (day==='Monday'){
    client.sendText(mynumber[i],'Jadwal Kuliah Hari Ini');
    client.sendText(mynumber[i],'Fisika Dasar II\n08:00-09:30\nR.303');
    client.sendText(mynumber[i],'Kalkulus II\n09:45-11:15\nR.303');
  } else if (day==='Tuesday'){
    client.sendText(mynumber[i],'Jadwal Kuliah Hari Ini');
    client.sendText(mynumber[i],'Fisika Dasar II\n08:00-09:30\nR.303');
    client.sendText(mynumber[i],'Kalkulus II\n09:45-11:15\nR.303');
  } else if (day==='Wednesday'){
    client.sendText(mynumber[i],'Jadwal Kuliah Hari Ini');
    client.sendText(mynumber[i],'Islamologi\n08:00-09:30\nR.303');
    client.sendText(mynumber[i],'Pengantar Basis Data\n09:45-11:15\nR.303');
    client.sendText(mynumber[i],'Bahasa Indonesia\n09:45-11:15\nR.303');
  } else if (day==='Saturday'){
    client.sendText(mynumber[i],'Jadwal Kuliah Hari Ini');
    client.sendText(mynumber[i],'Fisika Dasar II\n08:00-09:30\nR.303');
    client.sendText(mynumber[i],'Kalkulus II\n09:45-11:15\nR.303');
  }
}
  client.onMessage((message) => {
    if (message.body === 'Hi') {
      var delayInMilliseconds = 10000;
        setTimeout(client.startTyping(message.from),client.sendText(message.client), delayInMilliseconds, client.sendText(message.from, 'Welcome Venom 🕷'));
    }else if (message.from === mynumber[0]){
    client.sendText(mynumber[0],message.body) || client.forwardMessages(mynumber[0], [message.id.toString()], true);;
    }
  });
}