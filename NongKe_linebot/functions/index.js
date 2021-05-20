const admin = require("firebase-admin");

admin.initializeApp();

const chatbot = require("./chatbot");
//const nongke_payload = require("./nongke_payload");
//const nongke_about = require("./nongke_about");

exports.chatbot = chatbot.chatbot;
//exports.nongke_payload = nongke_payload.nongke_payload;
//exports.chatbot = nongke_about.chatbot;
