import styles from "./HeroSection.module.css";
import { useState, useRef } from "react";
import Button from "../../../ui/buttons/Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  useGSAP(()=>{

  },{dependencies: [currentIndex], revertOnUpdate: true})

  const getVideoSrc = (index: number) => `/videos/hero/hero-${index}.mp4`;

  return (
    <div className={styles.heroSection}>
      <div className={styles.videoFrame} id="video-frame">
        <div>
          <div className={styles.mask_clip_path}>
            <div onClick={handleMiniVideoClick} className={styles.miniVideo}>
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className={styles.video}
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className={styles.backgroundVideo}
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos + 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className={styles.backgroundVideo}
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className={styles.heroBottomText}>
          G<b>A</b>MING
        </h1>
        <div className={styles.heroTitleBox}>
          <div className={styles.heroHeading}>
            <h1 className={styles.heroMainHeading}>
              REDEFI<b>N</b>E
            </h1>
            <p className={styles.heroSubHeading}>
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass={styles.heroButton}
            />
          </div>
        </div>
      </div>
      <h1 className={styles.heroBelowText}>
        G<b>A</b>MING
      </h1>
    </div>
  );
};

export default HeroSection;
