import styles from '../components/Card.module.css' 

const Card = (props) => {
    return (
        <div>
            <div className={styles.Card}>{props.record.One}</div> 
            <div className={styles.Card}>{props.record.Two}</div>
            </div>
    )
}

export default Card