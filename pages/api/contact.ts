const ContactUs = (req: any, res: any) => {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    const { name } = body;
    // Send email
    sendEmail(body, (result: any) => {
      if (result) {
        res.status(200).json({
          message: `Thanks, ${name} for reaching out to us! We will get back to you at the earliest.`,
        });
      } else {
        res.status(400).json({
          message: `Sorry ${name}, we were not to able to process your request. Please try again.`,
        });
      }
    });
  } else {
    res.send(
      JSON.stringify({ message: "Invalid API method. Method should be POST" })
    );
  }
};

function sendEmail(
  { name, email, companyName, phoneNumber, message }: any,
  callback: any
) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: [
      "hello@appexert.com",
      "arindamd@appexert.com",
      "arindamdawn3@gmail.com",
    ],
    cc: "admin@appexert.com",
    from: "hello@appexert.com",
    subject: "New Enquiry | AppExert Contact Us",
    text: "New entry recorded from AppExert Contact Us Page",
    html: `<h1>User Information</h1>
            <p>Name: <strong>${name}</strong></p>
            <p>Email: <strong>${email}</p>
            <p>Phone Number: <stsrong>${phoneNumber}</strong></p>,
            <p>Company Name: <strong>${companyName}</strong></p>
            <p>Message: ${message}</p>`,
  };
  sgMail
    .send(msg)
    .then(() => callback(true))
    .catch((error: any) => {
      console.log(error);
      callback(false);
    });
}

export default ContactUs;
