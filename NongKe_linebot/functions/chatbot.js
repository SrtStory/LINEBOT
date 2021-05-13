const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// const axios = require("axios");
// const { request } = require("actions-on-google/dist/common");
const { WebhookClient, Payload } = require("dialogflow-fulfillment");
// const db = admin.firestore();
const sendmessage = require("./sendmessage");

exports.chatbot = functions.region("asia-southeast2").https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });
    //const lineUid = request.body.originalDetectIntentRequest.payload.data.source.userId;

    function nongke(agent) {
        agent.add("I'm Fine");
        const menu = [
            {
                name: "เริ่มต้นใช้งาน",
            },
            {
                name: "แจ้งเหตุ/ปัญหา",
            },
            {
                name: "คีย์ลัด",
            },
            {
                name: "คำถาม",
            },
            {
                name: "Contact dev",
            }
        ];
        const payloadBody = sendmessage.getCards(menu);
        agent.add(new Payload("LINE", payloadBody, { sendAsMessage: true }));
    }

    function about(agent) {
        agent.add("");
    }



    let intentMap = new Map();


    intentMap.set("NongKe", nongke);
    intentMap.set("NongKe -About", about);
    agent.handleRequest(intentMap);
});