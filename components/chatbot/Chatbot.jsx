'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WELCOME = {
  role: 'assistant',
  content: "Hi — I'm Om's assistant. Ask me about his work, his services, his numbers, or how he can help your company. 👋",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userMessage: text,
          messages: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      let data;
      try {
        data = await res.json();
      } catch (e) {
        throw new Error('Server returned an invalid response.');
      }
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to connect to AI server.');
      }
      
      setMessages((prev) => [...prev, { role: 'assistant', content: data.response }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: err.message || 'Having trouble connecting right now.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Panel */}
      <div className={`chat-panel ${isOpen ? '' : 'closed'}`}>
        {/* Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(56,189,248,0.12), rgba(245,200,66,0.08))',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(56,189,248,0.15)',
            padding: '16px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--sky), var(--gold))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 800,
                fontSize: '13px',
                color: '#000',
              }}
            >
              OKG
            </div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '14px', color: 'var(--white)' }}>
                Om&apos;s AI Assistant
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--emerald)', boxShadow: '0 0 6px var(--emerald)', animation: 'pulseDot 2s infinite' }} />
                <span style={{ color: 'var(--emerald)', fontSize: '11px', fontFamily: "'JetBrains Mono', monospace" }}>Online</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--slate-400)',
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            background: 'rgba(5,11,22,0.97)',
          }}
        >
          {messages.map((msg, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
              <div
                style={{
                  maxWidth: '85%',
                  padding: '10px 14px',
                  borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: msg.role === 'user'
                    ? 'linear-gradient(135deg, var(--sky), #0EA5E9)'
                    : 'rgba(255,255,255,0.05)',
                  border: msg.role === 'user' ? 'none' : '1px solid rgba(56,189,248,0.1)',
                  color: msg.role === 'user' ? '#000' : 'var(--slate-200)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: msg.role === 'user' ? 600 : 400,
                  whiteSpace: 'pre-wrap',
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{
                padding: '12px 16px',
                borderRadius: '16px 16px 16px 4px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(56,189,248,0.1)',
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
              }}>
                <div className="typing-dot" />
                <div className="typing-dot" />
                <div className="typing-dot" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div style={{
          padding: '12px 16px',
          background: 'rgba(8,14,28,0.99)',
          borderTop: '1px solid rgba(56,189,248,0.08)',
          display: 'flex',
          gap: '10px',
          alignItems: 'flex-end',
        }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything about Om..."
            rows={1}
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(56,189,248,0.15)',
              borderRadius: '10px',
              padding: '10px 14px',
              color: 'var(--white)',
              fontSize: '14px',
              fontFamily: "'Inter', sans-serif",
              resize: 'none',
              outline: 'none',
              lineHeight: 1.5,
              maxHeight: '100px',
              overflowY: 'auto',
            }}
            onFocus={(e) => { e.target.style.borderColor = 'var(--sky)'; }}
            onBlur={(e) => { e.target.style.borderColor = 'rgba(56,189,248,0.15)'; }}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: input.trim() ? 'linear-gradient(135deg, var(--sky), #0EA5E9)' : 'rgba(255,255,255,0.05)',
              border: 'none',
              cursor: input.trim() ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: input.trim() ? '#000' : 'var(--slate-400)',
              flexShrink: 0,
            }}
          >
            <Send size={17} />
          </button>
        </div>
      </div>

      {/* Float Button */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        aria-label={isOpen ? 'Close chat' : 'Open chat with Om\'s assistant'}
        id="chatbot-toggle"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--sky), var(--gold))',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(56,189,248,0.4), 0 0 40px rgba(56,189,248,0.15)',
          zIndex: 201,
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(56,189,248,0.6), 0 0 60px rgba(56,189,248,0.25)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(56,189,248,0.4), 0 0 40px rgba(56,189,248,0.15)'; }}
      >
        {isOpen ? <X size={22} color="#000" /> : <MessageCircle size={22} color="#000" />}
      </button>

      <style>{`
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.5); }
        }
      `}</style>
    </>
  );
}
