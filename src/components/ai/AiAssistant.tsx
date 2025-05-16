
import React, { useState, useEffect, useRef } from 'react';
import { Bot, MessageSquare, Send, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface Message {
  id: string;
  text: string;
  sender: 'ai' | 'user';
  timestamp: Date;
}

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: crypto.randomUUID(),
          text: 'Welcome to Inlustro website! How may I help you today?',
          sender: 'ai',
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');

    // Simulate AI response and navigation
    setTimeout(() => {
      let aiResponseText = "I'm sorry, I didn't understand that. Can you please rephrase?";
      const lowerInput = inputValue.toLowerCase();

      if (lowerInput.includes('student login') || lowerInput.includes('go to student portal')) {
        aiResponseText = 'Okay, taking you to the Student Login page.';
        navigate('/login/student');
        setIsOpen(false);
      } else if (lowerInput.includes('tutor login') || lowerInput.includes('go to tutor portal')) {
        aiResponseText = 'Sure, navigating to the Tutor Login page.';
        navigate('/login/tutor');
        setIsOpen(false);
      } else if (lowerInput.includes('admin login') || lowerInput.includes('go to admin portal')) {
        aiResponseText = 'Alright, heading to the Admin Login page.';
        navigate('/login/admin');
        setIsOpen(false);
      } else if (lowerInput.includes('home page') || lowerInput.includes('go to home')) {
        aiResponseText = 'Taking you to the home page!';
        navigate('/');
        setIsOpen(false);
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        aiResponseText = 'Hello there! How can I assist you?';
      } else if (lowerInput.includes('how are you')) {
        aiResponseText = "I'm doing great, thanks for asking! Ready to help.";
      } else if (lowerInput.includes('help')) {
        aiResponseText = "I can help you navigate the site. Try asking me to go to 'student login', 'tutor login', 'admin login', or 'home page'.";
      }


      const aiMessage: Message = {
        id: crypto.randomUUID(),
        text: aiResponseText,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }, 1000);
  };

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-lg"
          aria-label="Toggle AI Assistant"
        >
          {isOpen ? <X className="h-8 w-8 text-primary-foreground" /> : <Bot className="h-8 w-8 text-primary-foreground" />}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 sm:right-6 w-[calc(100%-3rem)] sm:w-96 h-[70vh] sm:h-[60vh] max-h-[500px] bg-card border border-border rounded-lg shadow-xl z-40 flex flex-col overflow-hidden"
          >
            <header className="p-4 border-b border-border bg-secondary/30">
              <h3 className="font-semibold text-lg text-foreground flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                AI Assistant
              </h3>
            </header>

            <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[75%] p-3 rounded-lg ${
                        msg.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-primary-foreground/70 text-right' : 'text-secondary-foreground/70'}`}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>

            <footer className="p-4 border-t border-border bg-secondary/30">
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Ask something..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="bg-background focus:ring-primary"
                />
                <Button onClick={handleSendMessage} size="icon" className="bg-primary hover:bg-primary/90 flex-shrink-0">
                  <Send className="h-5 w-5 text-primary-foreground" />
                </Button>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AiAssistant;

