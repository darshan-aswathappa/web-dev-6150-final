import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      // Here you would typically send the message to a backend and get a response
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thanks for your message! This is a placeholder response.", isUser: false }]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white shadow-lg">
      <div className="flex-shrink-0 p-4 bg-gray-100 border-b">
        <h2 className="text-lg font-semibold">Chatbot</h2>
      </div>
      <ScrollArea className="flex-grow p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="flex-shrink-0 p-4 border-t">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  );
}

