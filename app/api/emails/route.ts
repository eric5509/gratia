import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({  
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'jedidiah.heathcote65@ethereal.email',
      pass: 'dtkhRJtkXjxPxFQtCB'
  }
  });

export async function POST(req: Request) {
  const {
    name,
    phone,
    email,
    address,
    city,
    state,
    serviceType,
    facilityType,
    cleaningFrequency,
  } = await req.json();

  try {
    const mailOptions = {
      from: "emmanueltokyo24@gmail.com", 
      to: "emekaeric12@gmail.com",  
      subject: "Appointment", 
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}\nCity: ${city}\nState: ${state}\nFacility Type: ${facilityType}\nService Type: ${serviceType}\nCleaning Frequency: ${cleaningFrequency}`, // Plain text body
    };

    const info = await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully", info }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({  error }), {
      status: 500,
    });
  }
}
