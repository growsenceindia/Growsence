export async function POST(req) {
  const body = await req.json();

  const { name, email, phone, amount } = body;

  // Validate input
  if (!email || !phone || !amount) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  const orderId = `ORDER-${Date.now()}`;

  const res = await fetch('https://api.cashfree.com/pg/orders', {
    method: 'POST',
    headers: {
      'x-client-id': process.env.CF_APP_ID,       // Set in Vercel or .env.local
      'x-client-secret': process.env.CF_SECRET_KEY,
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
        return_url: `https://growsence.vercel.app/payment-success?order_id=${orderId}`,
      },
    }),
  });

  const result = await res.json();

  if (result.payment_link) {
    return new Response(JSON.stringify({ link: result.payment_link }), {
      status: 200,
    });
  } else {
    return new Response(JSON.stringify({ error: result.message || "Payment link error" }), {
      status: 500,
    });
  }
}