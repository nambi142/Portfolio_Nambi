const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();

// ✅ CORS setup
app.use(cors({ origin: '*', methods: ['GET', 'POST'] }));
app.use(express.json());

// ✅ Set SendGrid API Key from .env
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Root route
app.get('/', (req, res) => {
  res.send('✅ Backend running with SendGrid!');
});

// Send email route
app.post('/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    const msg = {
      to: process.env.EMAIL_USER,                // Receive messages
      from: process.env.EMAIL_USER,              // Verified sender
      templateId: process.env.SENDGRID_TEMPLATE_ID, // Dynamic Template ID
      dynamic_template_data: {
        name,
        email,
        phone,
        subject,
        message,
        year: new Date().getFullYear(),
      },
    };

    await sgMail.send(msg);
    console.log('✅ Email sent successfully via SendGrid');
    res.status(200).json({ success: true, message: 'Email sent successfully!' });

  } catch (err) {
    console.error('❌ Error sending email:', err);
    if (err.response) console.error(err.response.body);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Listen on port from .env
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
