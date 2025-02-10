const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");
const path = require("path");

const app = express();

// ✅ Enable CORS
app.use(cors());

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));

// ✅ OpenAI API Configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // 🔒 Secure API Key (Ensure .env file exists)
});
const openai = new OpenAIApi(configuration);

// ✅ Debug: Check if API Key is Loaded
if (!process.env.OPENAI_API_KEY) {
  console.error("❌ ERROR: OpenAI API key is missing! Add it in .env file.");
  process.exit(1); // Stop server if API key is missing
} else {
  console.log("✅ OpenAI API Key Loaded.");
}

// ✅ Chatbot API Route
app.post("/chat", async (req, res) => {
  const { text } = req.body;
  try {
    console.log(`User Input: ${text}`);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a chatbot providing information about the University of Nebraska at Kearney (UNK). Answer user questions based on the university's official resources.`,
        },
        { role: "user", content: text },
      ],
    });

    // ✅ Extracting response
    const botResponse = response.data.choices[0]?.message?.content || "I couldn't process your request.";

    console.log(`Bot Response: ${botResponse}`);
    
    res.json({ success: true, data: { message: botResponse } });
  } catch (error) {
    console.error("❌ Chatbot API Error:", error);
    res.status(500).json({ success: false, error: "Server error. Please try again later." });
  }
});

// ✅ Serve React Frontend (Ensure `build` folder exists)
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// ✅ Correct Port Placement
const PORT = process.env.PORT || 3000; // Change to 3001 if needed
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
