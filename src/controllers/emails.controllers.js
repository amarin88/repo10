import { sendMail } from "../utils/sendMails.js";//Import config de envío de emails

const sendEmail= async (req,res) =>{
  
    const { name } = req.body;
    const template = `
          <div>
              <h1> Bienvenido ${name} a nuestra App </h1>
              <img src="cid:cat2" />
          </div>
          `;
          
  
    try {
            await sendMail("a.marin@hotmail.com.ar", "Test nodemailer", "Mensaje de prueba", template);
            res.status(200).json({ status: "ok", msg: "Email sent successfully" });
          } catch (error) {
            res.status(500).json({ status: "error", msg: "Failed to send email", error: error.message });
          }
  };//Función asincrona para enviar emails

export default {
    sendEmail,
};