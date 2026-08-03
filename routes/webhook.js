const express = require("express");
const router = express.Router();

// Verify Webhook
router.get("/", (req, res) => {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (
    mode &&
    token &&
    mode === "subscribe" &&
    token === VERIFY_TOKEN
  ) {
    console.log("✅ Webhook Verified");
    return res.status(200).send(challenge);
  }

  return res.sendStatus(403);
});

// Receive Messages
router.post("/", async (req, res) => {
  try {
    console.log("📩 Message received!");
    console.log(JSON.stringify(req.body, null, 2));

    // Always reply 200 to Meta
    res.sendStatus(200);

  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;