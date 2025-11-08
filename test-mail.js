import "dotenv/config";
import { sendMail } from "./src/services/mailer.js";

const run = async () => {
  let name = "yasin";
  try {
    const info = await sendMail({
      to: "yasinbesni@gmail.com", // test için kendi mailin
      subject: "Test Mail - Node.js Brevo",
      html: `<h2>Hi ${name}👋</h2><p>This email was sent successfully from the Node.js application 🎉</p>`,
    });

    console.log("✅ Mail başarıyla gönderildi!");
    console.log(info);
  } catch (error) {
    console.error("❌ Mail gönderilemedi:", error);
  }
};

run();
