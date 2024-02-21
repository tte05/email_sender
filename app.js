const nodemailer = require("nodemailer");
const html = `
<h1>Hello </h1>
<p> NodeMailer sender</p>
`;

async function main() {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tamertazhenov2005@gmail.com",
        pass: "fxov nwse vvau uihc",
      },
    });

    const info = await transporter.sendMail({
      from: `Email <tamertazhenov2005@gmail.com>`,
      to: "tazhenov0@gmail.com",
      subject: "Node.js ",
      html: html,
    });

    console.log("Message sent: " + info.messageId);
  } catch (error) {
    if (error.code === "EAUTH" || error.code === "EENVELOPE") {
      console.error("Authentication failed. Please check your credentials.");
    } else if (error.code === "EENVELOPE") {
      console.error("Invalid sender or recipient address.");
    } else {
      console.error("Error occurred while sending email:", error);
    }
  }
}

main();
