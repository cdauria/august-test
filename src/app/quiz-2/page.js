'use client'

import React, { useState, useEffect } from 'react';
import getOpenAI from '../../utilities/getOpenAI'
import Card from '../../components/Card';
import styles from '../../components/Card.module.css';
import h4 from '../../components/getOpenAIResults.module.css';
import route from '../api/airtable/route'

const HomePage = () => {
  const [processedData, setProcessedData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [submittedOptions, setSubmittedOptions] = useState([]);


  const handleCardSelect = (questionId, option) => {
    setSelectedOptions((prevOptions) => [
      ...prevOptions.filter((item) => item.questionId !== questionId),
      { questionId, option },
    ]);
    console.log(`Selected option for question ${questionId}: ${option}`);
  };

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('src/app/api/airtable/route.js');
          if (response.ok) {
            const data = await response.json();
            setProcessedData(data);
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
      </div>
    );
  };

  export default HomePage;
