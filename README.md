## Overview
The UNK Chatbot Project is a web-based chatbot designed to provide users with detailed information about the University of Nebraska at Kearney (UNK), including its history, programs, resources, and student organizations. Built using JavaScript, the project leverages the OpenAI API for natural language processing to deliver accurate and engaging responses.

## Features
Interactive Chat: Users can ask questions about UNK and receive detailed, informative answers.
Custom Context: The chatbot is pre-trained with specific details about UNK's history, academic programs, and resources.
User-Friendly Interface: A simple and intuitive interface for seamless user interaction.
Static Build Serving: Hosts a static frontend build for easy deployment.
Technology Stack
Backend: Node.js with Express.js
API: OpenAI API (GPT-3.5-Turbo)
Environment Management: dotenv
Frontend Hosting: Static files served via Express
Installation
Prerequisites
Node.js (v14 or higher)
npm (Node Package Manager)
An OpenAI API key
Steps
## Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/unk-chatbot.git
cd unk-chatbot
Install dependencies:

bash
Copy
Edit
npm install
Set up environment variables:

## Create a .env file in the root directory.
Add your OpenAI API key and the desired port:
makefile
Copy
Edit
PORT=3000
OPENAI_API_KEY=your-api-key-here
Build and Run:

Build your frontend (if applicable) and ensure the static files are in the build directory.
Start the server:
bash
Copy
Edit
node index.js
The server will run at http://localhost:3000.
Usage
Chat Endpoint: Send POST requests to /chat with a JSON payload containing:
json
Copy
Edit
{
  "text": "Your question here"
}
Example response:
json
Copy
Edit
{
  "success": true,
  "data": {
    "message": "Response from the chatbot"
  }
}
## Project Highlights
Focused Context: The chatbot is tailored to provide highly relevant answers about UNK, ensuring users receive accurate and detailed information.
Robust Error Handling: Returns meaningful error messages in case of issues with the OpenAI API or invalid requests.
Future Enhancements
Integrate a dynamic frontend for real-time chat functionality.
Expand the chatbot's knowledge base with additional UNK-related topics.
Implement user analytics to track popular queries and improve responses.
