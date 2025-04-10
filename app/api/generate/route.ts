import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "models/gemini-1.5-flash", // ✅ make sure model is correct!
    });

    const chat = model.startChat({
      generationConfig: {
        temperature: 0.9,
        maxOutputTokens: 8192,
      },
      history: [],
    });

    const result = await chat.sendMessage(prompt);
    const response = await result.response.text();

    return NextResponse.json({ output: response });
  } catch (error: any) {
    console.error("API error:", error);
    return NextResponse.json({ error: error.message || "Unknown error" }, { status: 500 });
  }
}
