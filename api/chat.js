import OpenAI from "openai";

export default async function handler(req, res) {
  res.status(200).json({ reply: "Server Running ✅" });
}

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful AI assistant." },
        { role: "user", content: message }
      ],
    });

    res.status(200).json({
      reply: completion.choices[0].message.content
    });

  } catch (error) {
    console.error("API ERROR:", error);
    res.status(500).json({
      error: "Server error",
      details: error.message
    });
  }
      }
