import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
  try {
    const { name, email, phone, amount } = await req.json();

    const orderId = uuidv4();
    const paymentSessionPayload = {
      customer_details: {
        customer_id: phone,
        customer_email: email,
        customer_phone: phone,
      },
      order_id: orderId,
      order_amount: amount,
      order_currency: 'INR',
    };

    const response = await fetch('https://api.cashfree.com/pg/orders', {
      method: 'POST',
      headers: {
        'x-client-id': process.env.CF_APP_ID,
        'x-client-secret': process.env.CF_SECRET_KEY,
        'x-api-version': '2022-09-01',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paymentSessionPayload),
    });

    const data = await response.json();

    if (data.payment_link) {
      return NextResponse.json({ payment_link: data.payment_link });
    } else {
      return NextResponse.json({ error: data.message || 'Payment failed' }, { status: 400 });
    }
  } catch (err) {
    console.error('Cashfree error:', err);
    return NextResponse.json({ error: 'Internal error occurred' }, { status: 500 });
  }
}