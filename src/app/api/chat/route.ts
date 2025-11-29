import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key chưa được cấu hình. Vui lòng thêm OPENAI_API_KEY vào file .env' },
        { status: 500 }
      );
    }

    const systemPrompt = `Bạn là một trợ lý AI học tập thông minh, chuyên về Vật Lý, Hoá Học và Sinh Học.
Nhiệm vụ của bạn là:
- Giải thích các khái niệm khoa học một cách dễ hiểu
- Giúp học sinh hiểu bài, không chỉ cho đáp án
- Sử dụng ví dụ thực tế để minh hoạ
- Khuyến khích tư duy phản biện
- Trả lời bằng tiếng Việt, rõ ràng và thân thiện

Khi được hỏi về:
- Vật Lý: Giải thích hiện tượng, công thức, và cách áp dụng
- Hoá Học: Mô tả phản ứng, tính chất, và ứng dụng
- Sinh Học: Giải thích cơ chế sinh học, cấu trúc và chức năng`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const responseMessage = completion.choices[0]?.message?.content || 'Xin lỗi, tôi không thể trả lời câu hỏi này.';

    return NextResponse.json({ message: responseMessage });
  } catch (error: unknown) {
    console.error('Chat API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi xử lý yêu cầu: ' + errorMessage },
      { status: 500 }
    );
  }
}
