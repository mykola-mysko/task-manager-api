const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mykola.mysko@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    });
};

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mykola.mysko@gmail.com',
        subject: 'You have just cancelled your account',
        text: `Thank you for using our app, ${name}. We would appreciate if you share the reasons you decided to cancel your account. This will help us to improve our service.`
    });
};

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
};
