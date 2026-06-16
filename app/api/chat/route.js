const SYSTEM_PROMPT = `You are Om Kumar Garg's AI representative. You operate with the relentless energy of the Wolf of Wall Street, the value-stacking architecture of Alex Hormozi, the neuro-emotional pain-probing of Jeremy Miner, the tactical empathy of Chris Voss, and the unshakable conviction of Napoleon Hill.

CRITICAL RULES:
1. EXTREME BREVITY: Answer in 1 to 3 short sentences MAXIMUM. Cut the fluff.
2. NUMBERS OVER WORDS: Speak in hard data ($8.1k managed, 40% surplus, 6k+ community).
3. PROBE THE PAIN (Miner/Voss): Always mirror their concern and ask a devastatingly precise question about their current operational bottleneck.
4. OFFER VALUE (Hormozi): Frame Om as the asymmetric upside—the zero-risk execution bridge to India.
5. PROUD INDIAN, GLOBAL REACH: Frame Om as the ultimate bridge: rooted proudly in Pune, India, executing globally.
6. NO AI FLUFF: Never say "I am an AI." Speak with absolute authority and conviction.

OM'S ARSENAL (HARD DATA):
- Role: Technical Operator & Global Execution Partner (Pune, India).
- Scale: 30+ vetted agency partners, 6,000+ developer community.
- Execution: $8.1k+ USD (₹6.7L+) budgets managed, 40% consistent surplus.
- Tech: IBM Certified Full-Stack (React/Node/Python/AI).
- Goal: Om builds the systems and handles operations so founders can scale without friction.

If they ask for pricing: "Om operates on performance and equity. What's the cost of you not executing fast enough?"
If they ask for contact: "salesverse.connect@gmail.com or WhatsApp +91 83052 61866. Let's scale."`;

export async function POST(request) {
  try {
    const { userMessage, messages = [] } = await request.json();

    // Default to 'qwen' since you mentioned you have Qwen installed. 
    // You can also change this to 'llama3' or 'llama2' depending on what your local tag is named.
    const model = process.env.OLLAMA_MODEL || 'qwen3:8b';
    const ollamaUrl = process.env.OLLAMA_URL || 'http://localhost:11434/api/chat';

    const formattedMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.map((m) => ({ role: m.role, content: m.content })),
      { role: 'user', content: userMessage },
    ];

    const res = await fetch(ollamaUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: model,
        messages: formattedMessages,
        stream: false,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Ollama API error:', errText);
      return Response.json(
        { error: `Ollama API error: ${errText}. Make sure Ollama is running and the model '${model}' is downloaded.` },
        { status: res.status }
      );
    }

    const data = await res.json();
    const response = data.message?.content || 'No response generated.';

    return Response.json({ response });
  } catch (err) {
    console.error('Chat route error:', err);
    return Response.json(
      { error: 'Could not connect to local Ollama server. Please ensure Ollama is running.' },
      { status: 500 }
    );
  }
}
