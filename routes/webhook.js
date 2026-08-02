const express = require("express");

const router = express.Router();

const VERIFY_TOKEN = "InfinityAI123";

// Verify Webhook
router.get("/", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token === VERIFY_TOKEN) {
    return res.status(200).send(challenge);
  }

  res.sendStatus(403);
});

// Receive WhatsApp Messages
router.post("/", (req, res) => {
  console.log("Message received:");
  console.log(JSON.stringify(req.body, null, 2));

  res.sendStatus(200);
});

module.exports = router;