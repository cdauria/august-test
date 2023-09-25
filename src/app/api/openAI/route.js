import { NextResponse } from 'next/server';
import OpenAIApi from 'openai';

const openai = new OpenAIApi({ key: process.env.OPENAI_API_KEY });

const generatePromptFromResponses = (responses) => {
    const prompt = `Based on qualities such as ${responses.join(", ")}, what movie character would they be most similar to?`;
    return prompt;
}

export async function POST(request) {
    try {
        const userResponses = request.body.responses;
        
        // Convert the user's responses into a prompt for OpenAI
        // Example: if the user chooses "brave" and "independent", you might ask OpenAI "What movie character is brave and independent?".


        const response = await openai.complete({
            engine: 'davinci',
            prompt: prompt,
            max_tokens: 150,  // Modify based on your needs
            // ... any other configurations you want
        });

        const characterDescription = response.choices[0].text;

        return NextResponse.json({ character: characterDescription });

    } catch (error) {
        console.error('Error generating character description with OpenAI:', error);
        return NextResponse.error(new Error('Failed to generate character description'));
    }
}


