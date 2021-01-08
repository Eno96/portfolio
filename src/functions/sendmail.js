const sgMail = require('@sendgrid/mail')
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})
const { SENDGRID_API_KEY, SENDGRID_TO_EMAIL } = process.env
sgMail.setApiKey(SENDGRID_API_KEY)


 


exports.handler =  async (event, context, callback) => {

    const email = event.body;

    const msg = {
        to: 'dedicenes1996@gmail.com',
        from: 'dedicenes1996@gmail.com',
        subject: 'Enes Portofolio / Imas novu poruku',
        text: '<!DOCTYPE html> <html> <head> <title>Enes Portofolio</title> <meta http-equiv="content-type" content="text/html; charset=utf-8" > <meta name="viewport" content="width=device-width, initial-scale=1.0"> </head> <body style="font-family: "Helvetica Neue", "Segoe UI", Segoe, Helvetica, Arial, "Lucida Grande", sans-serif; font-weight: normal; margin: 0; padding: 0; text-align: center; color: #fff; background-color: #1072ED;"> <div className="container text-center" id="error" style="margin-left:  auto; margin-right:  auto; margin-top: 177px; max-width: 1170px; padding-right: 15px; padding-left: 15px;"> <svg height="100" width="100"> <circle cx="50" cy="50" r="31" stroke="#fff" stroke-width="9.5" fill="none" /> <circle cx="50" cy="50" r="6" stroke="#fff" stroke-width="1" fill="#fff" /> <line x1="50" y1="50" x2="35" y2="50" style="stroke:#fff;stroke-width:6" /> <line x1="65" y1="35" x2="50" y2="50" style="stroke:#fff;stroke-width:6" /> <path d="M59 65 L83 65 L75 87 Z" fill="#fff" /> <rect width="20" height="9" x="70" y="56" style="fill:#fff;stroke-width:0;" /> </svg> <div className="row" style="display: table; content: " ";"> <div className="col-md-12"> <div className="main-icon" style="color: #fff;"><span className="uxicon uxicon-clock-refresh"></span></div> <h1 style="font-size: 48px; font-weight: 300; margin: 0 0 20px 0;">Neko ti je poslao e-mail preko portofolia.</h1> <p className="lead" style="font-size: 21px; font-weight: 200; margin-bottom: 20px;margin: 0 0 10px;">Njegov e-mail je: ' + email +'</p> <p className="lead" style="font-size: 21px; font-weight: 200; margin-bottom: 20px;margin: 0 0 10px;">Provjeri portofolio jos jednom <a href="https://enes-portofolio.netlify.app" style="color: #eee; text-decoration: none;">Enes Portofolio </a></p> </div> </div> </div> </body> </html>',
        html: '<!DOCTYPE html> <html> <head> <title>Enes Portofolio</title> <meta http-equiv="content-type" content="text/html; charset=utf-8" > <meta name="viewport" content="width=device-width, initial-scale=1.0"> </head> <body style="font-family: "Helvetica Neue", "Segoe UI", Segoe, Helvetica, Arial, "Lucida Grande", sans-serif; font-weight: normal; margin: 0; padding: 0; text-align: center; color: #fff; background-color: #1072ED;"> <div className="container text-center" id="error" style="margin-left:  auto; margin-right:  auto; margin-top: 177px; max-width: 1170px; padding-right: 15px; padding-left: 15px;"> <svg height="100" width="100"> <circle cx="50" cy="50" r="31" stroke="#fff" stroke-width="9.5" fill="none" /> <circle cx="50" cy="50" r="6" stroke="#fff" stroke-width="1" fill="#fff" /> <line x1="50" y1="50" x2="35" y2="50" style="stroke:#fff;stroke-width:6" /> <line x1="65" y1="35" x2="50" y2="50" style="stroke:#fff;stroke-width:6" /> <path d="M59 65 L83 65 L75 87 Z" fill="#fff" /> <rect width="20" height="9" x="70" y="56" style="fill:#fff;stroke-width:0;" /> </svg> <div className="row" style="display: table; content: " ";"> <div className="col-md-12"> <div className="main-icon" style="color: #fff;"><span className="uxicon uxicon-clock-refresh"></span></div> <h1 style="font-size: 48px; font-weight: 300; margin: 0 0 20px 0;">Neko ti je poslao e-mail preko portofolia.</h1> <p className="lead" style="font-size: 21px; font-weight: 200; margin-bottom: 20px;margin: 0 0 10px;">Njegov e-mail je: ' + email +'</p> <p className="lead" style="font-size: 21px; font-weight: 200; margin-bottom: 20px;margin: 0 0 10px;">Provjeri portofolio jos jednom <a href="https://enes-portofolio.netlify.app" style="color: #eee; text-decoration: none;">Enes Portofolio </a></p> </div> </div> </div> </body> </html>',
    };


    try{
        await sgMail.send(msg)
        
        return {
            statusCode: 200,
            body: "Message sent"
        }
    } catch(e){
        return {
            statusCode: e.code,
            body: e.message
        }
    }
};