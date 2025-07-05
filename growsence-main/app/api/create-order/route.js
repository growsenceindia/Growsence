import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, email, phone, amount, course } = await req.json();

  const orderPayload = {
    customer_details: {
      customer_id: email,
      customer_email: email,
      customer_phone: phone,
      customer_name: name,
    },
    order_amount: amount,
    order_currency: "INR",
    order_meta: {
      return_url: `https://growsence.in/student/page?order_id={order_id}`,
    },
  };

  const res = await fetch("https://sandbox.cashfree.com/pg/orders", {
    method: "POST",
    headers: {
      "x-api-version": "2022-09-01",
      "Content-Type": "application/json",
      "x-client-id": process.env.CASHFREE_APP_ID,
      "x-client-secret": process.env.CASHFREE_SECRET_KEY,
    },
    body: JSON.stringify(orderPayload),
  });

  const data = await res.json();
  return NextResponse.json(data);
}