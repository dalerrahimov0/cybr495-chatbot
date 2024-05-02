import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, Typography, Box, Avatar, ListItemAvatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios'
import PersonIcon from '@mui/icons-material/Person';
import AndroidIcon from '@mui/icons-material/Android';
function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: 'user' };
    axios.post("https://chatbot1243-0d71626339bf.herokuapp.com/chat", { text: input })
      .then(msg => {
        console.log(msg.data.data.message.content)
        const botResponse = { text: msg.data.data.message.content, sender: 'bot' };
        setMessages(currentMessages => [...currentMessages, botResponse]);
      })
      .catch(err => {
        console.log(err)
      })
    setMessages([...messages, userMessage]);

    setInput(''); // Clear input after sending

  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Chat Bot
      </Typography>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {messages.map((message, index) => (
          <ListItem
            key={index}
            alignItems="center"  // This ensures vertical alignment of the flex items
            sx={{
              flexDirection: message.sender === 'user' ? 'row-reverse' : 'row',
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
              paddingY: 1, // Adds vertical padding for better spacing
            }}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: message.sender === 'user' ? 'secondary.main' : 'primary.main',m:1 }}>
                {message.sender === 'user' ? <PersonIcon /> : <AndroidIcon />}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={message.text}
              primaryTypographyProps={{
                style: {
                  textAlign: message.sender === 'user' ? 'right' : 'left',
                  width: '100%'
                }
              }}
            />
          </ListItem>
        ))}
      </List>


      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Type your message here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <Button variant="contained" color="primary" onClick={sendMessage} sx={{ ml: 1 }}>
          <SendIcon />
        </Button>
      </Box>
    </Container>
  );
}

export default App;
