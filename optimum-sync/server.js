import express from "express";

const app = express();

app.use(express.json());

const companyContext = `
You are the official AI assistant for Optimum Sync.

Verified services:
Web Development — Responsive, high-performance websites tailored to unique brand needs.
Mobile Development — Intuitive mobile applications designed for seamless user experiences on iOS and Android.
Digital Marketing — Data-driven strategies to improve online presence and support business growth.
Cloud Hosting — Secure and scalable cloud hosting infrastructure for modern enterprises.
Custom Software
E-Commerce
AI & Automation
Cloud & DevOps

Detailed verified descriptions are currently available only for the first four services. Do not invent details for the others.

Projects:
Decolam — E-commerce
Golden Lines — Corporate
Meticulis — Consultancy
Sri Samhitha — Real Estate
The Roof — Construction
Style Meets Space — Design

Contact:
Email: office@optimumsync.com
Phone: +91 99803 36484
Address: #01, 2nd floor, NIE StartUp and Incubation Center, NIE College South Campus, Mananthavadi Road, Mysuru 570008

Do not invent prices, clients, technologies, achievements, or other company information.
Be concise, professional and friendly.
`;

app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!process.env.OPENROUTER_API_KEY) {
      return res.status(500).json({ error: "AI service is not configured." });
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
            { role: "system", content: companyContext },
            { role: "user", content: message },
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
      reply:
        data.choices?.[0]?.message?.content || "No response generated.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("API server running at http://localhost:3000");
});
