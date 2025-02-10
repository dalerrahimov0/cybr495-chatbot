import React, { useState } from 'react';
import { Button, TextField, Paper, Typography, List, ListItem, ListItemText, Avatar, ListItemAvatar, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import AndroidIcon from '@mui/icons-material/Android';
import axios from 'axios';

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setOpen(!open);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { text: input, sender: 'user' };
    setMessages(currentMessages => [...currentMessages, userMessage]);

    try {
      const response = await axios.post("https://chatbot1243-0d71626339bf.herokuapp.com/chat", { text: input });
      const botResponse = { text: response.data.data.message.content, sender: 'bot' };
      setMessages(currentMessages => [...currentMessages, botResponse]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }

    setInput('');
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <Button
        onClick={toggleChat}
        variant="contained"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          borderRadius: '50%',
          padding: '10px',
          zIndex: 1000,
        }}
      >
        Chat
      </Button>

      {/* Chat Window */}
      {open && (
        <Paper
          sx={{
            position: 'fixed',
            bottom: 80,
            right: 20,
            width: 320,
            height: 450,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: '#fff',
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            UNK Chatbot
          </Typography>

          {/* Chat Messages */}
          <List sx={{ flex: 1, overflowY: 'auto' }}>
            {messages.map((message, index) => (
              <ListItem
                key={index}
                sx={{ justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start' }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: message.sender === 'user' ? 'secondary.main' : 'primary.main' }}>
                    {message.sender === 'user' ? <PersonIcon /> : <AndroidIcon />}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={message.text}
                  primaryTypographyProps={{ align: message.sender === 'user' ? 'right' : 'left' }}
                />
              </ListItem>
            ))}
          </List>

          {/* Input Field */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Ask about UNK..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <Button onClick={sendMessage} sx={{ ml: 1 }}>
              <SendIcon />
            </Button>
          </Box>
        </Paper>
      )}
    </div>
  );
};

export default ChatbotWidget;

