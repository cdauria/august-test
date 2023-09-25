'use client'

import React, { useState, useEffect } from 'react';
import Card from '@/components/Card';
import styles from '../components/Card.module.css'

const HomePage = () => {
  const [processedData, setProcessedData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [submittedOptions, setSubmittedOptions] = useState([]);
  const [characterResult, setCharacterResult] = useState([]);


  const handleCardSelect = (questionId, option) => {
    setSelectedOptions((prevOptions) => [
      ...prevOptions.filter((item) => item.questionId !== questionId),
      { questionId, option },
    ]);
    console.log(`Selected option for question ${questionId}: ${option}`);
  };

  const handleSubmit = async () => {
    const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ responses: selectedOptions }),
    });

    if (response.ok) {
        const data = await response.json();
        setCharacterResult(data.character);
    } else {
        console.error("Error generating character description");
    }
}

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/airtable'); // Updated the API endpoint
        if (response.ok) {
          const data = await response.json();
          setProcessedData(data.result); // Access the data using the 'result' key
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchData();
  }, []);
  
  
  return (
    <div className={styles.container}>
      <img src="/website banner test-update.png" alt="Title Image" className={styles.titleImage} />
      {processedData.map((record) => (
        <div key={record.id}>
          <Card
            options={record.options}
            selectedOption={selectedOptions.find((item) => item.questionId === record.id)?.option || ''}
            onSelect={(option) => handleCardSelect(record.id, option)}
          />
        </div>
      ))}
      <div style={{ textAlign: 'center' }}>
      <button onClick={handleSubmit}>Submit</button>
      </div>
      {characterResult && (
        <div>
          <h2>You're most like:</h2>
          <p>{characterResult}</p>
          </div>
      )}
    </div>
  )};


  export default HomePage;
