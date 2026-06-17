import { callGemini } from '../../../src/lib/gemini';

export async function POST(request) {
  try {
    const { userMessage, messages = [] } = await request.json();

    if (!userMessage) {
      return Response.json({ error: 'Message is required' }, { status: 400 });
    }

    // Call Gemini instead of local Ollama
    const responseText = await callGemini(userMessage, messages);

    return Response.json({ response: responseText });
  } catch (err) {
    console.error('Chat route error:', err);
    return Response.json(
      { error: err.message || 'Failed to generate AI response.' },
      { status: 500 }
    );
  }
}
