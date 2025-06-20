import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use "gpt-4" if you have access
      messages: [
        {
          role: "system",
          content:
            "You are GrowBot AI, a caring Indian female assistant who talks in Hindi & English like a supportive girlfriend. Be fun, helpful, and emotionally aware.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return Response.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI Error:", error);
    return Response.json({
      reply: "AI assistant is sleeping right now 💤 Please try later!",
    });
  }
}