import styles from "./HeroSection.module.css";
import { useState, useRef } from "react";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
