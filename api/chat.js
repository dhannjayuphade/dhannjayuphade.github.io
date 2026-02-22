import OpenAI from "openai";

export default async function handler(req, res) {

  // ===== CORS =====
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: "API key missing" });
    }
const openai = new OpenAI({
  apiKey: "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"
});
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message missing" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: message }
      ],
    });

    return res.status(200).json({
      reply: completion.choices[0].message.content
    });

  } catch (error) {
    console.error("OPENAI ERROR:", error);
    return res.status(500).json({
      error: error.message
    });
  }
           }
