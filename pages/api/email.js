// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { transporter } from "../../config/nodemailer"


const handler = async (req, res) => {
    if (req.method === "POST") {
        const name = req.body.from_name
        const email = req.body.reply_to
        const message = req.body.message
        const subject = req.body.subject
        if (!name || !email || !message) {
            return res.status(400).send({ message: "Bad request" });
        }
        const content = `
    from: ${name} 
    <br> 
    email: ${email} 
    <br> 
    subject: ${subject} 
    <br> 
    message: ${message}`

        var mail = {
            to: process.env.RECEIVING_EMAIL_ADDRESS,
            subject: 'Email von Kontaktformular der Cabrito Art Page',
            html: content
        }

        try {
            await transporter.sendMail(mail, (err, data) => {
                if (err) {
                    res.status(400).send({
                        msg: 'fail',
                        success: false
                    })
                } else {
                    res.status(200).send({
                        msg: 'success',
                        success: true
                    })
                }
            })
        } catch (error) { return error }
    }
}

export default handler;