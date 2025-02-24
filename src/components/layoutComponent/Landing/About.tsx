import { useGSAP } from '@gsap/react'
import styles from './About.module.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "top top",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });
    
        clipAnimation.to(`#clip .${styles.mask_clip_path}`, {
            width: "100vw",
            height: "100vh",
            borderRadius: "0%",
        });
    });    
  return (
    <div id="about" className={styles.aboutContainer}>
        <div className={styles.headerBox}>
            <h2 className={styles.heading}>Welcome to GameFlow Studio</h2>
            <div className={styles.subHeading}>Discover the world's largest shared adventure</div>
            <div className={styles.bottomText}>
                <p>The Games of Games begins-your Life, now an epic MMORPG</p>
                <p>Gameflow Studio unites every player from countless games  and platforms</p>
            </div>
        </div>
        <div className={styles.imageBox} id='clip'>
            <div className={`${styles.mask_clip_path} ${styles.mask}`}>
                <img src="/img/about.webp" alt="background" className={styles.aboutImage} />
            </div>
        </div>
    </div>
  )
}

export default About