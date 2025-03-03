import styles from "./Contact.module.css";
import Button from "../../../ui/buttons/Button";

const ImageClipBox = ({src, alt, className}: {src: string, alt: string, className: string}) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className={styles.contactContainer}>
      <div className={styles.contactBox}>
        <div className={styles.contact}>
          <ImageClipBox
            className={styles.contactClipPath}
            src="img/contact-1.webp"
            alt="" 
          />
          <ImageClipBox
            className={styles.contactClipPath2}
            src="img/contact-2.webp"
            alt="" 
          />
        </div>

        <div className={styles.contact2}>
            <ImageClipBox 
                src="img/swordman-partial.webp"
                alt="swordman"
                className={styles.contactClipPath3}    
            />
            <ImageClipBox 
                src="img/swordman.webp"
                alt="swordman"
                className={styles.contactClipPath4}    
            />
        </div>

        <div className={styles.contactText}>
            <p className={styles.contactTitle}>Join Gameflow Studio</p>
            <p className={styles.contactDescription}>Let's build the new era of gaming together</p>
            <Button title="contact us" containerClass={styles.contactButton}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
