import styles from "./Story.module.css";
import AnimatedTitle from "../../../ui/AnimateTitle/AnimateTitle";
import { useRef } from 'react';
import gsap from 'gsap';


const Story = () => {
  const frameRef = useRef<HTMLImageElement>(null);

  const handleMouseLeave = () =>{
    
  }
  const handleMouseMove = (event: MouseEvent) =>{
    const { clientX, clientY } = event;
    const element = frameRef.current;

    if(!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX =  ((y - centerY) / centerY) * -10;
    const rotateY =  ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX, rotateY,
      transformPerspective: 500,
      ease: "power1.out",
    })
  }

  return (
    <section className={styles.storySection}>
      <div className={styles.storyContainer}>
        <p>The Multiverse of IP World </p>
        <div>
          <AnimatedTitle title="The Story of a Hidden Realm" />

          <div className={styles.storyImgContainer}>
            <div className={styles.storyImgMask}>
              <div className={styles.storyImgContent}>
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="/img/entrance.webp"
                  alt="entrance"
                  className={styles.objectContainer}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
