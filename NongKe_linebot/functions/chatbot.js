const functions = require('firebase-functions')
const admin = require('firebase-admin')
const axios = require('axios')
const { request } = require('actions-on-google/dist/common')
const WebhookClient, Payload = require('dialogflow-fulfillment')
const db = admin.firestore

exports.chatbot = functions.region('us-central1').https.onRequest((request, response) => {

    const agent = new WebhookClient({ request, response });
    const lineUid = request.body.originalDetectIntentRequest.payload.data.source.userId;

    async function ask1(agent) {
        await agent.add('Received!');
    }

    let intentMap = new Map();


    intentMap.set('Ask 1', ask1);
    agent.handleRequest(intentMap);
})
