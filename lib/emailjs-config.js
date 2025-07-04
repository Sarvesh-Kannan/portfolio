// EmailJS Configuration
// Follow these steps to set up EmailJS:

// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create a new email service (Gmail recommended)
// 3. Create an email template
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the values below

export const emailjsConfig = {
  // Replace these with your actual EmailJS credentials
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID', 
  publicKey: 'YOUR_PUBLIC_KEY'
}

// Example EmailJS template variables you should use:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{subject}} - Message subject
// {{message}} - Message content
// {{to_email}} - Your email (sarveshkannan30@gmail.com)

// Sample email template:
/*
Subject: New Portfolio Contact: {{subject}}

Hello Sarvesh,

You have received a new message from your portfolio website:

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
*/ 