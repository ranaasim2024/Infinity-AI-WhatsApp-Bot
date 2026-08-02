const express = require("express");
const webhook = require("./routes/webhook");

const app = express();

const PORT = 3000;
app.use("/webhook", webhook);
app.get("/", (req, res) => {
  res.send("Infinity AI WhatsApp Bot is Running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});