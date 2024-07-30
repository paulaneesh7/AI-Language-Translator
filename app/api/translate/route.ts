import { NextRequest, NextResponse } from "next/server";
import {
  GoogleGenerativeAI,
  GoogleGenerativeAIResponseError,
} from "@google/generative-ai";

export async function POST(request: NextRequest) {
  const { sourceText, selectedLanguage } = await request.json();

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? "");

  if (!sourceText) {
    return NextResponse.json({ error: "Source Language is required" }, { status: 400 });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
        You will be provided with a sentence. This sentence: ${sourceText}. 
        Your task are to:
        - detect what language the sentence is in
        - translate the sentence to ${selectedLanguage}
        do not returns anything other than the translated sentence.
    `

    const result = await model.generateContent(prompt)
    const response = await result.response;
    
    console.log("Gemini API Response:", response.text());
    return NextResponse.json({response: response.text()}, {status: 200})
  } catch (err) {
    console.error("Gemini API Error:", err);
    return NextResponse.json(
      { err: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
