import styles from "./Story.module.css";
import AnimatedTitle from "../../../ui/AnimateTitle/AnimateTitle";

const Story = () => {
  return (
    <section className={styles.storySection}>
      <div className={styles.storyContainer}>
        <p>The Multiverse of IP World   </p>
          <div>
            <AnimatedTitle title="The Story of a Hidden Realm" />
          </div>
      </div>
    </section>
  );
};

export default Story;
