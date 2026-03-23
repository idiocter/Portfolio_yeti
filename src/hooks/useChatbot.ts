// =============================================================================
// CHATBOT HOOK - Chat state and message handling
// =============================================================================

import { useState, useCallback, useEffect, useRef } from 'react';
import type { ChatMessage } from '@/types';
import { chatbotConfig } from '@/config/env';

const STORAGE_KEY = 'yeti-chat-history';
const MAX_HISTORY = 50;

// Predefined responses for the chatbot
const botResponses: Record<string, string> = {
  services: `We offer a comprehensive range of software development services:

• Web Application Development
• Mobile App Development  
• UI/UX Design
• Cloud Solutions & DevOps
• API Development & Integration
• Consulting & Strategy

Would you like to know more about any specific service?`,

  pricing: `Our pricing is flexible and project-based. We offer:

• Fixed-price projects for well-defined scopes
• Hourly rates for ongoing development
• Retainer models for long-term partnerships

Contact us with your project details for a customized quote!`,

  team: `Our team consists of 6 expert developers:

• Bipul Regmi - Project Manager
• Ritika Shrestha - Business Analyst
• Swornim Karki - Backend Lead
• Swornim Shrestha - Full Stack Developer
• Magish Gautam - Frontend Developer
• Nikesh Deuja - Frontend Developer

We're a passionate team from Kathmandu, Nepal!`,

  contact: `You can reach us through:

• Email: ${chatbotConfig.welcomeMessage.includes('hello@yetidev.com') ? 'hello@yetidev.com' : 'hello@yetidev.com'}
• Location: Kathmandu, Nepal
• Response Time: Usually within 24 hours

Or fill out the contact form on our website!`,

  bhatbhatify: `BhatBhatify is our flagship project - a tours and travel platform for Nepal!

Features:
• Curated Nepali tour packages
• Local guide connections
• Secure booking system
• Multi-language support

Built with: React, Node.js, MongoDB, Express, Tailwind CSS`,

  tech: `Our tech stack includes:

Frontend: React, Next.js, TypeScript, Tailwind CSS
Backend: Node.js, Express, Python
Database: MongoDB, PostgreSQL
Mobile: React Native, Flutter
Cloud: AWS, Vercel, Docker

We use modern, scalable technologies!`,

  hello: 'Namaste! Welcome to Yeti Development Corporation. How can I assist you today?',
  hi: 'Namaste! Welcome to Yeti Development Corporation. How can I assist you today?',
  hey: 'Namaste! Welcome to Yeti Development Corporation. How can I assist you today?',

  default: "I'm not sure I understand. Try asking about:\n\n• Our Services\n• Pricing\n• Our Team\n• Contact Info\n• BhatBhatify Project\n• Our Tech Stack",
};

// Fuzzy matching for user queries
function findBestResponse(input: string): string {
  const lowerInput = input.toLowerCase();
  
  // Direct keyword matching
  const keywords: Record<string, string[]> = {
    services: ['service', 'offer', 'do', 'work', 'development', 'build', 'create', 'make'],
    pricing: ['price', 'cost', 'rate', 'charge', 'budget', 'how much', 'expensive', 'cheap'],
    team: ['team', 'member', 'people', 'developer', 'staff', 'who', 'employee'],
    contact: ['contact', 'email', 'reach', 'call', 'phone', 'message', 'talk'],
    bhatbhatify: ['bhatbhatify', 'project', 'travel', 'tour', 'nepal', 'booking'],
    tech: ['tech', 'stack', 'technology', 'use', 'framework', 'language', 'tool'],
    hello: ['hello', 'namaste', 'hi', 'hey', 'greetings'],
  };

  for (const [key, words] of Object.entries(keywords)) {
    if (words.some(word => lowerInput.includes(word))) {
      return botResponses[key] || botResponses.default;
    }
  }

  return botResponses.default;
}

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load chat history from sessionStorage
  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setMessages(parsed);
      } catch {
        // Invalid JSON, start fresh
        initializeChat();
      }
    } else {
      initializeChat();
    }
  }, []);

  // Save chat history when messages change
  useEffect(() => {
    if (messages.length > 0) {
      const trimmed = messages.slice(-MAX_HISTORY);
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
    }
  }, [messages]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const initializeChat = () => {
    const welcomeMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'bot',
      content: chatbotConfig.welcomeMessage,
      timestamp: Date.now(),
    };
    setMessages([welcomeMessage]);
  };

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const response = findBestResponse(content);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: response,
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 700); // Random delay between 800-1500ms
  }, []);

  const clearChat = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY);
    initializeChat();
  }, []);

  const toggleChat = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeChat = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openChat = useCallback(() => {
    setIsOpen(true);
  }, []);

  return {
    messages,
    isOpen,
    isTyping,
    sendMessage,
    clearChat,
    toggleChat,
    closeChat,
    openChat,
    messagesEndRef,
  };
}
