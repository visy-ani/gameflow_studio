import React, { useEffect, useRef } from "react";
import styles from "./AnimateTitle.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  title: string;  
  containerClass?: string;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ title, containerClass }) => {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const words = containerRef.current?.querySelectorAll(`.${styles.animatedWord}`);

      if (words && words.length > 0) {
        const titleAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "100% bottom",
            end: "center bottom",
            toggleActions: "play none none reverse",
          },
        });

        titleAnimation.to(words, {
          opacity: 1,
          transform: "translate3D(0,0,0) rotateX(0deg) rotateY(0deg)", 
          ease: "power2.inOut",
          stagger: 0.02,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`${styles.animatedTitle} ${containerClass}`}>
      {title.split("<br />").map((line, index) => (
        <div key={index} className={styles.animatedLine}>
          {line.split(" ").map((word, i) => (
            <span key={i} className={styles.animatedWord} dangerouslySetInnerHTML={{ __html: word }} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
