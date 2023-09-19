import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  const prompt = req.body.prompt; // Assuming you send the prompt in the request body
  try {
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 500,
    });
    const generatedText = response.choices[0].text.trim().split('\n');
    res.status(200).json({ generatedText });
  } catch (error) {
    console.error('Error generating GPT response:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}