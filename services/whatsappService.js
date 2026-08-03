const axios = require("axios");

async function sendWhatsAppMessage(to, message) {
  try {
    await axios.post(
      `https://graph.facebook.com/v23.0/${process.env.PHONE_NUMBER_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: to,
        type: "text",
        text: {
          body: message,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Reply sent successfully.");
  } catch (error) {
    console.error(
      "❌ Error sending message:",
      error.response?.data || error.message
    );
  }
}

module.exports = {
  sendWhatsAppMessage,
};