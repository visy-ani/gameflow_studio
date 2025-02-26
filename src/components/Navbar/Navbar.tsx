import { TiLocationArrow } from "react-icons/ti";
import styles from "./Navbar.module.css";
import { useEffect, useRef, useState } from "react";
import Button from "../../ui/buttons/Button";

const Navbar = () => {
  const [isAudioPlaying, setAudioPlaying] = useState(false);

  const [isIndicatorActive, setIndicatorActive] = useState(false);

  const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
  const navContainerRef = useRef<HTMLDivElement>(null);

  const audioElementRef = useRef<HTMLAudioElement>(null);

  const toggleAudioIndicator = () => {
    setAudioPlaying((prevState) => !prevState);

    setIndicatorActive((prevState) => !prevState);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current?.play();
    } else {
      audioElementRef.current?.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div ref={navContainerRef} className={styles.navContainer}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navItems}>
            <img src="/img/logo.png" alt="logo" className={styles.logo} />
            <Button
              id="product-button"
              title="Product"
              leftIcon={<TiLocationArrow />}
              containerClass={styles.navButton}
            />
          </div>
          <div className={styles.links}>
            <div className={styles.linkItems}>
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className={styles.link}
                >
                  {item}
                </a>
              ))}
            </div>
            <button
              className={styles.playButton}
              onClick={toggleAudioIndicator}
            >
              <audio
                ref={audioElementRef}
                className={styles.audio}
                src="/audio/loop.mp3"
                loop
              />

              <div className={styles.barsContainer}>
                {[1, 2, 3, 4].map((bar, index) => (
                  <div
                    key={bar}
                    className={`${styles.bar} ${
                      isIndicatorActive ? styles.active : ""
                    }`}
                    style={
                      { "--animation-order": index } as React.CSSProperties
                    }
                  ></div>
                ))}
              </div>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
