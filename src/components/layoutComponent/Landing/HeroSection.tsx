import styles from "./HeroSection.module.css";
import { useState, useRef, useEffect } from "react";
import Button from "../../../ui/buttons/Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  useEffect(()=>{
    if(loadedVideos === totalVideos - 1){
      setLoading(false);
    }
  }, [loadedVideos])

  useGSAP(
    () => {
      if (hasClicked && nextVideoRef.current) {
        gsap.set(nextVideoRef.current, { visibility: "visible" });

        gsap.to(nextVideoRef.current, {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            if (nextVideoRef.current) {
              const playPromise = nextVideoRef.current.play();
              if (playPromise !== undefined) {
                playPromise.catch((error) =>
                  console.warn("Autoplay blocked:", error)
                );
              }
            }
          },
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index: number) => `/videos/hero/hero-${index}.mp4`;

  return (
    <div className={styles.heroSection}>
      {isLoading && (
        <div className={styles.loading}>
          <div className={styles.loadingDot}/>
          <div className={styles.loadingDot}/>
          <div className={styles.loadingDot}/>
        </div>
      )}
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
            className={styles.backgroundVideoFrame}
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


