require("dotenv").config();

const express = require("express");
const webhook = require("./routes/webhook");

const app = express();

// This lets Express read WhatsApp JSON messages
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Infinity AI WhatsApp Bot is Running!");
});

// WhatsApp Webhook
app.use("/webhook", webhook);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});