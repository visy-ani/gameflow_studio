import styles from './LandingLayout.module.css'

export default function LandingLayout({children}: {children: React.ReactNode}){
    return (
        <div className={styles.landingLayout}>
            <header className={styles.header}></header>
            <main className={styles.landingMain}>{children}</main>
            <footer className={styles.footer}></footer>
        </div>
    )
}