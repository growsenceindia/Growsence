import { NextResponse } from 'next/server';

export async function POST(req) {
  const { name, email, phone, amount } = await req.json();

  const customer_id = email.split("@")[0].replace(/[^a-zA-Z0-9_-]/g, "");

  const payload = {
    order_amount: amount,
    order_currency: "INR",
    customer_details: {
      customer_id,
      customer_email: email,
      customer_phone: phone,
    },
    order_meta: {
      return_url: `${process.env.BASE_URL}/student/page`
    }
  };

  const res = await fetch("https://api.cashfree.com/pg/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-version": "2023-08-01",
      "x-client-id": process.env.CASHFREE_APP_ID,
      "x-client-secret": process.env.CASHFREE_SECRET_KEY,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (data.payment_session_id) {
    return NextResponse.json({
      payment_link: `https://www.cashfree.com/pg/view-payment/${data.payment_session_id}`
    });
  }

  return NextResponse.json({ error: data.message || "Unable to create session" });
}