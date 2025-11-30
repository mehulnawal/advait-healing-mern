import axios from "axios";

export const sendWhatsAppMessage = async (data) => {
    try {
        await axios.post(
            "https://graph.facebook.com/v19.0/YOUR_PHONE_NUMBER_ID/messages",
            {
                messaging_product: "whatsapp",
                to: data.clientNumber,
                type: "text",
                text: {
                    body: `
📌 New Healing Session Request

👤 Name: ${data.name}
📞 Phone: ${data.phone}
📧 Email: ${data.email}
✨ Service: ${data.service}
📝 Message: ${data.message}
                    `
                }
            },
            {
                headers: {
                    Authorization: `Bearer YOUR_PERMANENT_TOKEN`,
                    "Content-Type": "application/json"
                }
            }
        );

        return { success: true };

    } catch (err) {
        console.error(err.response?.data || err);
        return { success: false };
    }
};
