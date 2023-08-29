import styles from '../components/PageBackground.module.css'

const PageBackground = (props) => {
    return (
    <div className={styles.PageBackground}>
        {props.children}
    </div>
    );
};

export default PageBackground

