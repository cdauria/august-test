import { useState } from 'react';
import getAirtableData from '@/utilities/getAirtableData';
import styles from '../components/Card.module.css'

const Card = ({ options, selectedOption, onSelect }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      {options.map((option) => (
        <button
          key={option}
          className={`${styles.Card} ${
            selectedOption === option ? styles.selected : ''
            } ${styles.cardButton}`}
          onClick={() => onSelect(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Card;

/*import { useState } from 'react'
import styles from '../components/Card.module.css'
import getAirtableData from '@/utilities/getAirtableData'

const Card = (props) => {
    const [selected, setSelected] = useState(null);

    const handleClickOne = () => {
        console.log("Button One clicked")
        setSelected("One");
    }

    const handleClickTwo = () => {
        console.log("Button Two clicked")
        setSelected("Two");
    }

    return (
<div>
            <button 
                className={`${styles.Card} ${selected === "One" ? styles.selected : ""}`} 
                onClick={handleClickOne}
            >
                {props.record.One}
            </button>
            <button 
                className={`${styles.Card} ${selected === "Two" ? styles.selected : ""}`} 
                onClick={handleClickTwo}
            >
                {props.record.Two}
            </button>
        </div>
    )
}

export default Card;*/



/* 'use client'

import { useState } from 'react'
import styles from '../components/Card.module.css'
import getAirtableData from '@/utilities/getAirtableData'

const Card = (props) => {
    const [selected, setSelected] = useState(null);

    const handleClickOne = () => {
        console.log("Button One clicked")
        setSelected("One");
    }

    const handleClickTwo = () => {
        console.log("Button Two clicked")
        setSelected("Two");
    }

    return (
<div>
            <button 
                className={`${styles.Card} ${selected === "One" ? styles.selected : ""}`} 
                onClick={handleClickOne}
            >
                {props.record.One}
            </button>
            <button 
                className={`${styles.Card} ${selected === "Two" ? styles.selected : ""}`} 
                onClick={handleClickTwo}
            >
                {props.record.Two}
            </button>
        </div>
    )
}

export default Card;*/
