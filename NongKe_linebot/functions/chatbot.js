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
        agent.add("น้องเก๋มาแล้วน้าา มีอะไรให้ช่วย สอบถาม ติดต่อ\nหรือ ต้องการบริการเสริม สามารถบอกได้เลยน้า😚");       
        const menu = [
            {
                label : "เริ่มต้นใช้งาน",
                text : "about",
                type : "message",
                image :"https://www.img.in.th/images/cc5d49de68865d07a8e0ffc399e3212e.jpg"
            },
            {
                label: "แจ้งเหตุ/ปัญหา",
                text : "report",
                type : "message",
                image :"https://www.img.in.th/images/7e10f6199c2621c4b3a7979eb974bab7.jpg"
            },
            {
                label: "คีย์ลัด",
                text : "htokey",
                type : "message",
                image :"https://www.img.in.th/images/9bf950237d455cd52607c8586703bb38.jpg"
            },
            {
                label: "คำถาม",
                text : "questions",
                type : "message",
                image :"https://www.img.in.th/images/7e10f6199c2621c4b3a7979eb974bab7.jpg"
            },
            {
                label: "Contact dev",
                text : "contact",
                type : "message",
                image :"https://www.img.in.th/images/41ab00960f24f648de38ffc402471330.jpg"
            }
        ];
        const payloadBody = sendmessage.getCards(menu);
        agent.add(new Payload("line", payloadBody, {sendAsMessage: true }));
    }

  /*  function about(agent) {
        agent.add("");
    }*/



    let intentMap = new Map();

    intentMap.set("NongKe", nongke);
   // intentMap.set("NongKe -About", about);
    agent.handleRequest(intentMap);
});