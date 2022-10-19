import womanImg from "../../../assets/images/woman2.png";
import styles from "./AboutUsPage.module.css";

const AboutUsPage = () => {
  return (
    <section className={styles.abouUsContainer}>
      <div className={styles.aboutUsContent}>
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={styles.aboutUsContent2}>
        <div className={styles.aboutUsImgContainer}>
          <img src={womanImg} />
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
