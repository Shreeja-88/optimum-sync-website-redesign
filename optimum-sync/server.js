import express from "express";


const app = express();

app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model: "openrouter/free",
          messages: [
            {
              role: "system",
              content:
                "You are the official Optimum Sync assistant. Be concise, professional and friendly. Optimum Sync provides Web Development, App Development, Digital Marketing and Cloud Hosting.",
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error(data);
      return res.status(500).json({ error: "AI request failed" });
    }

    res.json({
      reply: data.choices?.[0]?.message?.content || "No response generated.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("API server running at http://localhost:3000");
});