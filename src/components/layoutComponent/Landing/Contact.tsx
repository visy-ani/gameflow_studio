import styles from "./Contact.module.css";

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
        </div>
      </div>
    </div>
  );
};

export default Contact;
