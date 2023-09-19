/* 'use client'

import React, { useState, useEffect } from 'react';
import GetOpenAI from '@/utilities/getOpenAI';
import Card from '../../components/Card'
import getAirtableData from '../../utilities/getAirtableData'
import styles from '../../components/Card.module.css'
import h4 from '../../components/getOpenAIResults.module.css'


export default function HomePage ({ processedData }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [submittedOptions, setSubmittedOptions] = useState([]);

  const handleCardSelect = async (questionId, option) => {
    setSelectedOptions((prevOptions) => [
      ...prevOptions.filter((item) => item.questionId !== questionId),
      { questionId, option },
    ]);

    try {
      const response = await fetch('/api/logResponse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questionId, option }),
      });
      
      if (response.ok) {
        console.log('User response logged successfully.');
      } else {
        console.error('Error logging user response:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging user response:', error);
    }

    console.log(`Selected option for question ${questionId}: ${option}`);
  };
  
    useEffect(() => {
      async function fetchData() {
        try {
          const data = await getAirtableData();
          setProcessedData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
  
      fetchData();
    }, []);
  
    return (
      
      <div className={styles.container}>
      <img src="/website banner test-update.png" alt="Title Image" className={styles.titleImage}/>
        
    
        {processedData.map((record) => (
          <div key={record.id}>
            <Card
              options={record.options}
              selectedOption={selectedOptions[record.id]}
              onSelect={(option) => handleCardSelect(record.id, option)}
            />
          </div>
        ))}
       <div style={{ textAlign: 'center' }}>
        <button onClick={handleSubmit} className={styles.button}>
          submit
        </button></div>
  
        {submittedOptions.length > 0 && (
          <div className={styles.resultContainer}>
            <h3>Based on your selections, you are most like:</h3>
            <div className={styles.generatedText}>
              <h4>
              <GetOpenAI
                pairedOptions={submittedOptions}
                selectedOptionsArray={Object.values(selectedOptions)}
                questions={processedData}
              />
              </h4>
            </div>
          </div>
        )}
      </div>
    );
  };
*/