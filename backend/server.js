const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Set up storage for uploaded resumes
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'taskenginembw@gmail.com',
    pass: 'rgxi vkao aqli pafs'
  }
});

app.post('/api/apply', upload.single('resume'), (req, res) => {
  const { name, email, phone, position, experience, message } = req.body;
  const resume = req.file;

  const mailOptions = {
    from: 'taskenginembw@gmail.com',
    to: 'shalinimbw@gmail.com',
    subject: `New Job Application: ${position} from ${name}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #123964; padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">New Job Application</h1>
          <p style="color: #3b82f6; margin: 10px 0 0 0; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 2px;">${position}</p>
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
          <h2 style="color: #123964; font-size: 18px; margin-top: 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Applicant Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; width: 140px;">Full Name:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Email Address:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Phone Number:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Experience:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${experience}</td>
            </tr>
          </table>
          
          <h2 style="color: #123964; font-size: 18px; margin-top: 30px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Message / Cover Letter</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; color: #475569; font-size: 14px; line-height: 1.6;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;">
          This is an automated application from <strong>Raj & Subramanian</strong> portal.
        </div>
      </div>
    `,
    attachments: resume ? [
      {
        filename: resume.originalname,
        content: resume.buffer
      }
    ] : []
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Failed to send application.' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ success: true, message: 'Application sent successfully!' });
  });
});

app.post('/api/alumni', (req, res) => {
  const { name, email, phone, tenure, currentRole, company, message } = req.body;

  const mailOptions = {
    from: 'taskenginembw@gmail.com',
    to: 'shalinimbw@gmail.com',
    subject: `New Alumni Registration: ${name}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #123964; padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">Alumni Network Registration</h1>
          <p style="color: #3b82f6; margin: 10px 0 0 0; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 2px;">New Connection Request</p>
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
          <h2 style="color: #123964; font-size: 18px; margin-top: 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Personal Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; width: 140px;">Full Name:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Email Address:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Phone Number:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${phone}</td>
            </tr>
          </table>

          <h2 style="color: #123964; font-size: 18px; margin-top: 30px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Professional Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; width: 140px;">Tenure at R&S:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${tenure}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Current Role:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${currentRole}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Company:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${company}</td>
            </tr>
          </table>
          
          <h2 style="color: #123964; font-size: 18px; margin-top: 30px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Message</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; color: #475569; font-size: 14px; line-height: 1.6;">
            ${message ? message.replace(/\n/g, '<br>') : 'No additional message.'}
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;">
          This is an automated request from <strong>Raj & Subramanian</strong> Alumni Portal.
        </div>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Failed to send registration.' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ success: true, message: 'Registration sent successfully!' });
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const mailOptions = {
    from: 'taskenginembw@gmail.com',
    to: 'shalinimbw@gmail.com',
    subject: `New Inquiry: ${subject} from ${name}`,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #123964; padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">General Inquiry</h1>
          <p style="color: #3b82f6; margin: 10px 0 0 0; font-weight: bold; text-transform: uppercase; font-size: 12px; letter-spacing: 2px;">Subject: ${subject}</p>
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
          <h2 style="color: #123964; font-size: 18px; margin-top: 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Contact Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px; width: 140px;">Full Name:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Email Address:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Phone Number:</td>
              <td style="padding: 10px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${phone}</td>
            </tr>
          </table>
          
          <h2 style="color: #123964; font-size: 18px; margin-top: 30px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Message</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; color: #475569; font-size: 14px; line-height: 1.6;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; color: #94a3b8; font-size: 12px;">
          This is an automated message from <strong>Raj & Subramanian</strong> Contact Form.
        </div>
      </div>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, message: 'Failed to send message.' });
    }
    console.log('Email sent:', info.response);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
