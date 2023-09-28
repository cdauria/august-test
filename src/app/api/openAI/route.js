import { NextResponse } from 'next/server'
import OpenAI from "openai";

export async function POST(request) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });
    const data = await request.json();
    console.log(`got a request: ${JSON.stringify(data, null, 4)}`);
    const response = await openai.images.generate({
        prompt: `make an image to go with these words: ${data.prompt}`,
        n: 1,
        size: "256x256",
    });
    console.log("Open AI response:", response.data);
    const generatedImage = response.data[0].url;
    return NextResponse.json({ imageUrl: generatedImage, result: response.data, params: data });
}
