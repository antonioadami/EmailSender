import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

class NodeMailer {
  transporter: Mail;

  constructor() {
    this.transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'email@gmail.com', // generated ethereal user
        pass: 'password', // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async Run(): Promise<void> {
    const mailSent = await this.transporter.sendMail({
      text: 'Texto do email',
      subject: 'Assunto do email',
      to: ['emailToBeSent@gmail.com'],
      html: `
      <html>
        <body>
        <h1>Test</h1>
        </body>
      </html>
      `,
    });

    console.log(mailSent);
  }
}

export default NodeMailer;
