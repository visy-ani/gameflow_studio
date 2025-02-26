import styles from './LandingLayout.module.css'
import { Navbar } from '../../components'

export default function LandingLayout({children}: {children: React.ReactNode}){
    return (
        <div className={styles.landingLayout}>
            <header className={styles.header}><Navbar /></header>
            <main className={styles.landingMain}>{children}</main>
            <footer className={styles.footer}></footer>
        </div>
    )
}