// app/api/ai-suggestions/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { level, interest } = await req.json();

    const prompt = `
You are a helpful AI learning assistant.

Given the user's skill level and interest, suggest 3 AI-related online courses with short descriptions and estimated difficulty.

Respond ONLY with JSON like this:

{
  "courses": [
    {
      "title": "Course Title 1",
      "description": "Brief course overview",
      "difficulty": "Beginner"
    },
    {
      "title": "Course Title 2",
      "description": "Brief course overview",
      "difficulty": "Intermediate"
    },
    {
      "title": "Course Title 3",
      "description": "Brief course overview",
      "difficulty": "Advanced"
    }
  ]
}

User info:
- Skill level: ${level}
- Interest: ${interest}
`;

    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant specialized in AI education.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 800,
      }),
    });

    const data = await openaiRes.json();

    if (!openaiRes.ok) {
      console.error("OpenAI error:", data);
      return NextResponse.json({ error: data }, { status: openaiRes.status });
    }

    const content = data.choices[0].message.content.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(content);

    return NextResponse.json(parsed);
  } catch (err: any) {
    console.error("API route error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
