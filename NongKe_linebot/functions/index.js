const admin = require("firebase-admin");

admin.initializeApp();

const chatbot = require("./chatbot");
const sendmessage = require("./sendmessage");

exports.chatbot = chatbot.chatbot;
exports.sendmessage = sendmessage.sendmessage;