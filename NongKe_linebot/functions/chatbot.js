const functions = require("firebase-functions");
// const admin = require("firebase-admin");
// const axios = require("axios");
// const { request } = require("actions-on-google/dist/common");
const { WebhookClient, Payload } = require("dialogflow-fulfillment");
// const db = admin.firestore();
const nongke_payload = require("./nongke_payload");
const nongke_report = require("./nongke_report");
const nongke_question = require("./nongke_question");


exports.chatbot = functions.region("asia-southeast2").https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  //const lineUid = request.body.originalDetectIntentRequest.payload.data.source.userId;

  function nongke(agent) {
    agent.add("น้องเก๋มาแล้วน้าา มีอะไรให้ช่วย สอบถาม ติดต่อ\nหรือ ต้องการบริการเสริม สามารถบอกได้เลยน้า😚");
    const menu = [
      {
        label: "เริ่มต้นใช้งาน",
        text: "about",
        type: "message",
        image: "https://www.img.in.th/images/cc5d49de68865d07a8e0ffc399e3212e.jpg"
      },
      {
        label: "แจ้งเหตุ/ปัญหา",
        text: "report",
        type: "message",
        image: "https://www.img.in.th/images/7e10f6199c2621c4b3a7979eb974bab7.jpg"
      },
      {
        label: "คีย์ลัด",
        text: "hotkey",
        type: "message",
        image: "https://www.img.in.th/images/9bf950237d455cd52607c8586703bb38.jpg"
      },
      {
        label: "คำถาม",
        text: "questions",
        type: "message",
        image: "https://www.img.in.th/images/7e10f6199c2621c4b3a7979eb974bab7.jpg"
      },
      {
        label: "Contact dev",
        text: "contact",
        type: "message",
        image: "https://www.img.in.th/images/41ab00960f24f648de38ffc402471330.jpg"
      }
    ];
    const payloadBody = nongke_payload.getCards(menu);
    agent.add(new Payload("LINE", payloadBody, { sendAsMessage: true }));
  }

  function about(agent) {
    agent.add("เริ่มใช้งานง่ายๆ ตามนี้เลย\n1. เชิญ NongKe(น้องเก๋) เข้าร่วมกลุ่ม\n2. พิมพ์คำว่า 'น้องเก๋' ในกลุ่มที่เชิญน้องเก๋เข้าไป เพื่อเริ่มต้นการใช้งาน\n3. เลือกวิธีการใช้งานในแบบต่างๆ ที่เหมาะกับกลุ่มของคุณพี่ และให้น้องเก๋ช่วยเตือนให้");
    const about_image = {
      type: "image",
      originalContentUrl: "https://www.img.in.th/images/dccc3561aceefed7ef7a20bbd5f0359f.jpg",
      previewImageUrl: "https://www.img.in.th/images/dccc3561aceefed7ef7a20bbd5f0359f.jpg",
      platform: "LINE"
    };
    agent.add(new Payload("LINE", about_image, { sendAsMessage: true }));
  }

  function hotkey(agent) {
    agent.add("เพื่อให้ข้อมูลของน้องเก๋มีประสิทธ์ภาพมากยิ่งขึ้น กรุณาเลือกองค์กรที่คุณลูกค้าปฎิบัติงานอยู่โดยใช้คีย์ลัดด้วยนะด้านล่างด้วยนะคะ\n01: company A\n02: company B\n03: company C\n04: company D\nหากข้อมูลที่น้องเก๋ให้ยังไม่เพียงพอกรุณาติดต่อ Dev โดยตรง\nโดยการพิมนพ์ #Dev หรือสามารถคลิกเลือกติดต่อDev ด้านบนได้ค่ะ");
  }

  function report(agent) {
    const list_position = [
      {
        imageUrl: "https://www.img.in.th/images/ae91970667f63efe059d8f0a03a6da31.png",
        text: "web",
        type: "message",
        label: "WebBrowser"
      },
      {
        imageUrl: "https://www.img.in.th/images/d803b279ee78fe698ccba1abb17676d8.png",
        text: "app",
        type: "message",
        label: "Application"
      },
      {
        imageUrl: "https://www.img.in.th/images/0691d165732d93db804b99a8e3d7234e.jpg",
        text: "IT",
        type: "message",
        label: "IT-Support"
      }
    ];
    const Reportpayload = nongke_report.getReport(list_position);
    agent.add(new Payload("LINE", Reportpayload, { sendAsMessage: true }));
  }

  function question(agent) {
    agent.add("กำลังรอข้อมูลอยู่น้า");
    //const QuestionPayload = nongke_question.getQuestion();
    agent.add(new Payload("LINE", nongke_question.getQuestion(), { sendAsMessage: true }));
  }

  function contact(agent) {
    agent.add("น้องเก๋มาแล้วค๊าาา 👩🏼‍🦰\n[ติดต่อสอบถาม]\nหากมีข้อสงสัย หรือ แจ้งเหตุขัดข้อง\nกรุณาติดต่อน้องเก๋ได้ตาม ข้อมูลด้านล่างนี้น้า\n📋 แจ้งเหตุผ่านแบบสอบถามออนไลน์\n📞 : 042556...  \nถ้าต้องการติดต่อกับ admin โดยตรงได้โดยการเพิ่มเพื่อน ด้วย link หรือ QR code ด้านล่างได้เลยน้า");
    agent.add("https://lin.ee/A904zdG");
    const QRCode_Contact_image = {
      type: "image",
      originalContentUrl: "https://www.img.in.th/images/0469a73f5f4f5d83909b5a6ff634423d.png",
      previewImageUrl: "https://www.img.in.th/images/0469a73f5f4f5d83909b5a6ff634423d.png"
    };
    agent.add(new Payload("LINE", QRCode_Contact_image, { sendAsMessage: true }));
  }

  let intentMap = new Map();

  intentMap.set("NongKe", nongke);
  intentMap.set("NongKe - About", about);
  intentMap.set("NongKe - Report", report);
  intentMap.set("NongKe - Hotkey", hotkey);
  intentMap.set("NongKe - Questions", question);
  intentMap.set("NongKe - Contact dev", contact);
  agent.handleRequest(intentMap);
});