import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, amount } = body;

    if (!name || !email || !phone || !amount) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const orderId = uuidv4(); // Generate a unique order ID

    const res = await fetch('https://api.cashfree.com/pg/orders', {
      method: 'POST',
      headers: {
        'x-client-id': process.env.CF_APP_ID,
        'x-client-secret': process.env.CF_SECRET_KEY,
        'x-api-version': '2022-09-01', // ✅ REQUIRED
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_id: orderId,
        order_amount: amount,
        order_currency: 'INR',
        customer_details: {
          customer_id: email,
          customer_email: email,
          customer_phone: phone,
          customer_name: name,
        },
        order_meta: {
          return_url: `${process.env.BASE_URL}/payment-success?order_id={order_id}`,
        },
      }),
    });

    const result = await res.json();

    if (res.ok && result.payment_link) {
      return NextResponse.json({ payment_link: result.payment_link });
    } else {
      console.error('Cashfree Error:', result);
      return NextResponse.json({ error: result.message || 'Cashfree failed' }, { status: 500 });
    }
  } catch (error) {
    console.error('Internal Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}