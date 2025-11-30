import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());
app.use(cors());

// Replace with your client’s email
const CLIENT_EMAIL = "clientemail@example.com";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "yourgmail@gmail.com",
        pass: "your-app-password",
    },
});

app.post("/send-session-mail", async (req, res) => {
    const { name, email, phone, sessionType, message } = req.body;

    try {
        await transporter.sendMail({
            from: email,
            to: CLIENT_EMAIL,
            subject: "New Session Booking Request",
            html: `
                <h2>New Session Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Session Type:</strong> ${sessionType}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        res.json({ success: true });
    } catch (error) {
        res.json({ success: false, error });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
