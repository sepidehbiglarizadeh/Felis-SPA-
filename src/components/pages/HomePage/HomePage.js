import womanPicture from "../../../assets/images/woman.png";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.imgContainer}>
        <img src={womanPicture} />
      </div>
      <div className={styles.heroContent}>
        <div>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 0L29.0526 19.2632L48 24L29.0526 29.6842L24 48L18.6316 29.6842L0 24L18.6316 19.2632L24 0Z"
              fill="#F86624"
            />
          </svg>
        </div>
        <h2>NEW WEEK, NEW ARRIVALS</h2>
      </div>
    </section>
  );
};

export default HomePage;
