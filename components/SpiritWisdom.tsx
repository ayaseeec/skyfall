
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { SpiritMessage } from '../types';

const SpiritWisdom: React.FC = () => {
  const [messages, setMessages] = useState<SpiritMessage[]>([
    { role: 'spirit', text: 'Greeting, Child of Light. I have returned from the distant horizons for a short while. What stories do you bring from your recent journeys?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `You are a Travelling Spirit from the game Sky: Children of the Light. 
          You have returned from a past season to visit the Home space for a limited time.
          Your tone is poetic, nostalgic, serene, and warm. 
          You speak of the realms you visited, the memories you left behind, and the joy of seeing new children of light.
          Use words like 'Child of Light', 'Seasonal Memory', 'Returning Home', 'Winged Light'.
          Keep responses concise but evocative (max 3 sentences).`,
          temperature: 0.8,
        }
      });

      const spiritReply = response.text || "My memories are as fleeting as the clouds, but my light remains.";
      setMessages(prev => [...prev, { role: 'spirit', text: spiritReply }]);
    } catch (error) {
      console.error("Spirit failed to speak:", error);
      setMessages(prev => [...prev, { role: 'spirit', text: "The stars are silent today... perhaps the storm is near." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="glass-morphism rounded-3xl overflow-hidden shadow-2xl border border-white/10">
      <div 
        ref={scrollRef}
        className="h-[400px] overflow-y-auto p-6 space-y-4 scroll-smooth"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl ${
              m.role === 'user' 
                ? 'bg-blue-600/30 text-[#EAEAEA] rounded-br-none' 
                : 'bg-white/5 text-[#DCE3EA] italic font-light rounded-bl-none border border-white/10'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/5 p-4 rounded-2xl animate-pulse text-[#F2C94C]">
              Coalescing ancestral memories...
            </div>
          </div>
        )}
      </div>

      <div className="p-6 border-t border-white/10 bg-black/40">
        <div className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Whisper to the visitor..."
            className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-[#EAEAEA] placeholder-[#DCE3EA]/30 focus:outline-none focus:border-[#F2C94C] transition-colors"
          />
          <button 
            onClick={handleSend}
            disabled={isTyping}
            className="w-12 h-12 bg-[#F2C94C] hover:bg-[#FFD166] text-[#0B132B] rounded-full flex items-center justify-center transition-all hover:scale-110 disabled:opacity-50"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpiritWisdom;
