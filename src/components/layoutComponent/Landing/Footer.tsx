import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
            <p className={styles.footerText}>&copy; GameFlow Studio 2024. All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer