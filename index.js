var express = require ('express');
var app = express();
const path = require('path');
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');

app.use(express.static(path.join(__dirname, 'public')));
app.get('/',function(request,response){
   // response.send('this is a string')
   response.sendFile(__dirname +'/index.html')
});
/*
app.post('/getquote', function(req,res){
console.log("ajax worked");
 // Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
         //  console.log(req.body.responseData[0]);
         //  console.log(req.body.responseData[1]);
       let transporter = nodemailer.createTransport({
       host: "smtp.gmail.com",
      port: 465,
      secure: true,
       auth: {
         type: 'OAuth2',
         user: 'watsonemail24680@gmail.com',
         clientId: "804174903576-b5puecf74i61f3rgcqc84sv5j35o91rh.apps.googleusercontent.com",
         clientSecret: "ArawoRLVskso6V6pJSyZ2X2G",
         accessToken: "ya29.Glv9BIT5PhcDsyGFg5WphNb2sopKMu7Fv-96WP5Md2y9MFRtXXD_-aRwNMCv8tm0lx0TmKn6IteGoan5BLj_oCwCayUUhIst9DpW1_ULyUia_mT96MzBQ79FrA1E",  
         expires: 3600, 
         refreshToken: "1/B4WCjJXl2B9UQIojYeaifPParKJSImE1Ewsuaq4LV6o"   
     }
       });
   
   //variable for email message to send to user
   let mailOptions = {
   //our email address
   from: '"IBM Watson" <watsonemail24680@gmail.com>',
   //user email
   to: 'jjguzman24680@gmail.com', 
   //subject line
   subject: req.body.responseData[0],
   //text and html
   text: req.body.responseData[0], 
   html: '<b>'+req.body.responseData[1]+'</b>' 
   };
   //function to send email
   transporter.sendMail(mailOptions, (error, info) => {
   if (error) {
   return console.log(error);
   }
   console.log('Message sent: %s', info.messageId);
   })
 })

 */
app.listen(3001);

