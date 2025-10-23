import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = 'orders@camatrustfarms.com';

const OWNER_EMAIL = 'camatrust.farms@gmail.com'; 

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, address, orderDetails, cartTotal } = body;

    const ownerEmail = await resend.emails.send({
      from: `CamaTrust Farms <${FROM_EMAIL}>`,
      to: [OWNER_EMAIL],
      subject: 'New Order Received!',
      replyTo: email, 
      html: `
        <h1>New Order for CamaTrust Farms</h1>
        <p>You've received a new order. Please contact the customer to confirm payment and delivery.</p>
        <h2>Customer Details:</h2>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Address:</strong> ${address}</li>
        </ul>
        <h2>Order Details:</h2>
        <pre>${orderDetails}</pre>
        <h3>Total: GHS ${cartTotal}</h3>
      `,
    });
    
    if (ownerEmail.error) {
      console.error('Error sending owner email:', ownerEmail.error);
      throw new Error(ownerEmail.error.message);
    }

    const customerEmail = await resend.emails.send({
      from: `CamaTrust Farms <${FROM_EMAIL}>`,
      to: [email], 
      subject: 'Your CamaTrust Farms Order is Confirmed!',
      html: `
        <h1>Thank You, ${name}!</h1>
        <p>We've successfully received your order. We will contact you shortly via phone (${phone}) to confirm payment and delivery details.</p>
        <p>Your order details are below:</p>
        <pre>${orderDetails}</pre>
        <h3>Total: GHS ${cartTotal}</h3>
        <br/>
        <p>Thank you for shopping with CamaTrust Farms!</p>
      `,
    });

    if (customerEmail.error) {
      console.error('Error sending customer email:', customerEmail.error);
      throw new Error(customerEmail.error.message);
    }

    return NextResponse.json({ message: 'Emails sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Full API Error:', error);
    const errorMessage = (error as Error).message || 'Unknown error';
    return NextResponse.json({ message: 'Error sending email', error: errorMessage }, { status: 500 });
  }
}