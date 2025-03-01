import { useState, useRef, ReactNode, MouseEvent } from "react";
import { TiLocationArrow } from "react-icons/ti";
import styles from "./Features.module.css";

interface BentoTiltProps {
  children: ReactNode;
  className?: string;
}

export const BentoTilt: React.FC<BentoTiltProps> = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={`${styles.bentoTilt} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  src: string;
  title: ReactNode;
  description?: string;
  isComingSoon?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  src,
  title,
  description,
  isComingSoon,
}) => {
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className={styles.sizeFull}>
      <video src={src} loop muted autoPlay className={`${styles.video} ${styles.sizeFull}`} />
      <div className={styles.bentoCardContainer}>
        <div>
          <h1 className={`${styles.bentoTitle} ${styles.specialFont}`}>{title}</h1>
          {description && <p className={styles.bentoCardDescription}>{description}</p>}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.comingSoonButton}
          >
            <div
              className={styles.comingSoonHover}
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className={styles.icon} />
            <p>coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features: React.FC = () => (
  <section className={styles.featuresSection}>
    <div className={styles.featuresContainer}>
      <div className={styles.featuresHeader}>
        <p className={styles.featuresText}>Into the Metagame Layer</p>
        <p className={styles.featuresTextSecondary}>
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
        </p>
      </div>

      <BentoTilt className={styles.bentoTiltContainer}>
        <BentoCard
          src="videos/feature/feature-1.mp4"
          title={<> radia<b>n</b>t </>}
          description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          isComingSoon
        />
      </BentoTilt>

      <div className={styles.bentoGrid}>
        <BentoTilt className={styles.bentoTilt1}>
          <BentoCard
            src="videos/feature/feature-2.mp4"
            title={<> zig<b>m</b>a </>}
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className={styles.bentoTilt1}>
          <BentoCard
            src="videos/feature/feature-3.mp4"
            title={<> n<b>e</b>xus </>}
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className={styles.bentoTilt1}>
          <BentoCard
            src="videos/feature/feature-4.mp4"
            title={<> az<b>u</b>l </>}
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            isComingSoon
          />
        </BentoTilt>

        {/* <BentoTilt className={styles.bentoTilt2}>
          <div className={styles.moreComingSoonContainer}>
            <h1 className={styles.moreComingSoonText}>M<b>o</b>re co<b>m</b>ing s<b>o</b>on.</h1>
            <TiLocationArrow className={styles.largeIcon} />
          </div>
        </BentoTilt> */}

        <BentoTilt className={styles.bentoTilt2}>
          <video
            src="videos/feature/feature-5.mp4"
            loop
            muted
            autoPlay
            className={styles.videoFeature}
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
