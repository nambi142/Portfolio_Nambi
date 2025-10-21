const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ CORS setup (allow frontend requests)
app.use(cors({
  origin: '*', // you can restrict this to your frontend URL later
  methods: ['GET', 'POST']
}));

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Send email route
app.post('/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    // ✅ Nodemailer transporter with explicit host/port for Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,       // SSL
      secure: true,    // use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // ✅ Verify connection
    await transporter.verify();
    console.log('✅ SMTP Server Ready');

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: subject || 'New Contact Form Message',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      replyTo: email
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    res.status(200).json({ success: true, message: 'Email sent successfully!' });

  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// Listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
