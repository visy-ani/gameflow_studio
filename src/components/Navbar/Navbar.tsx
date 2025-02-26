import { TiLocationArrow } from 'react-icons/ti';
import styles from './Navbar.module.css'
import { useRef } from 'react'
import Button from '../../ui/buttons/Button';

const Navbar = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={navContainerRef} className={styles.navContainer}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navItems}>
            <img src="/img/logo.png" alt="logo" className={styles.logo}/>
              <Button
                id="product-button"
                title="Product"
                leftIcon={<TiLocationArrow />}
                containerClass={styles.navButton}
              />
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar