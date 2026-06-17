'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { PERSONAL } from '@/src/lib/constants';

const LinkedinIcon = ({ size = 24, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function AuditPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 4 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem('auditPopupSeen');
      if (!hasSeenPopup) {
        setIsOpen(true);
        sessionStorage.setItem('auditPopupSeen', 'true');
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '100px', // Just above the chatbot toggle
          right: '24px',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--gold)',
              borderRadius: '12px',
              width: '340px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(245, 158, 11, 0.15)'
            }}
          >
            {/* Top accent line */}
            <div style={{ height: '3px', width: '100%', background: 'linear-gradient(90deg, var(--gold), var(--sky))' }} />
            
            <div style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ padding: '4px 8px', background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.2)', borderRadius: '4px', color: 'var(--red-pain)', fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em', fontWeight: 600 }}>
                  FOUNDER'S OFFER
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  style={{ background: 'none', border: 'none', color: 'var(--slate-400)', cursor: 'pointer', padding: '0px' }}
                >
                  <X size={16} />
                </button>
              </div>
              
              <h3 style={{ fontSize: '16px', color: 'var(--white)', margin: '0 0 10px 0', lineHeight: 1.3 }}>
                Leaving 1.47 Billion on the Table?
              </h3>
              
              <div style={{ color: 'var(--slate-300)', fontSize: '13px', lineHeight: 1.5, display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                <p style={{ margin: 0 }}>
                  It's costing you more to <em>ignore</em> India than it is to enter it. Capturing even <strong>0.01%</strong> means massive, infinite ROI.
                </p>
                <p style={{ margin: 0 }}>
                  Get a ruthless, uncensored <strong>India Market Audit</strong>—raw TAM analysis, competitor dissection, ground-level demographic surveys, & brutal regulatory truths.
                </p>
                <p style={{ margin: 0, color: 'var(--white)' }}>
                  The investment? <strong>A nominal strategic fee—less than your daily SaaS subscriptions.</strong> Pure, actionable intelligence to guarantee your outcome.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <a 
                  href={PERSONAL.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    background: 'var(--emerald)',
                    color: '#000',
                    padding: '8px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '12px',
                    transition: 'transform 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
                <a 
                  href={PERSONAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    background: 'rgba(14, 165, 233, 0.1)',
                    border: '1px solid rgba(14, 165, 233, 0.3)',
                    color: 'var(--sky)',
                    padding: '8px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '12px',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = 'rgba(14, 165, 233, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = 'rgba(14, 165, 233, 0.1)';
                  }}
                >
                  <LinkedinIcon size={14} />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
