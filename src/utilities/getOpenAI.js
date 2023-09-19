import React, { useState, useEffect } from 'react';

const GetOpenAI = ({ pairedOptions, questions }) => {
  const [generatedText, setGeneratedText] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const prompt1 = `give me a list of ten random movie characters`; // Your prompt logic here
    async function generateText() {
      try {
        const response = await fetch('/api/openai', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: prompt1 }),
        });
        const data = await response.json();
        setGeneratedText(data.generatedText);
      } catch (error) {
        console.error('Error generating GPT response:', error);
      } finally {
        setLoading(false);
      }
    }

    generateText();
  }, [pairedOptions]);
};

export default GetOpenAI