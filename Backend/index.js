import express from "express";
import cors from "cors";
import { sendWhatsAppMessage } from "./sendWhatsApp.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/book-session", async (req, res) => {
    const response = await sendWhatsAppMessage({
        ...req.body,
        clientNumber: "91XXXXXXXXXX"   // your client WhatsApp number
    });

    if (response.success) {
        return res.json({ status: "success" });
    }

    res.json({ status: "failed" });
});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
});
