import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const messages = [
  { id: 1, sender: 'user', content: 'Hello, how can you help me today?' },
  { id: 2, sender: 'bot', content: 'Hello! I\'m here to assist you with any questions or tasks you might have. What would you like help with?' },
  { id: 3, sender: 'user', content: 'Can you explain how machine learning works?' },
  { id: 4, sender: 'bot', content: 'Machine learning is a subset of artificial intelligence that focuses on the development of algorithms and statistical models that enable computer systems to improve their performance on a specific task through experience, without being explicitly programmed. Here\'s a brief overview:...' },
];

export function ChatArea({ selectedFolder }) {
  return (
    <ScrollArea className="flex-grow bg-background/50 rounded-lg shadow-inner p-4">
      <div className="space-y-6 max-w-4xl mx-auto">
        {selectedFolder && (
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent text-center">
            {selectedFolder}
          </h2>
        )}

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`flex items-start space-x-3 max-w-[75%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
            >
              <Avatar>
                <AvatarImage src={message.sender === 'user' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKa3xRPNbZuH8TB4AIYKiIOCQ_aB_Tyy55A&s' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-OFOuCpaMY8sQtRnnKRXKgSKXhDaEQQWJw&s'} />
                <AvatarFallback>{message.sender === 'user' ? 'U' : 'B'}</AvatarFallback>
              </Avatar>
              <div
                className={`p-4 rounded-2xl text-sm shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105
                  ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-sm'
                      : 'bg-secondary text-secondary-foreground rounded-bl-sm'
                  }`
                }
              >
                {message.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}