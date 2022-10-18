import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <h3>FELIS</h3>
        <div className={styles.footerList}>
          <ul className={styles.list}>
            <li>
              <a href="#">shop now</a>
            </li>
            <li>
              <a href="#">collections</a>
            </li>
            <li>
              <a href="#">lookbook</a>
            </li>
            <li>
              <a href="#">search</a>
            </li>
          </ul>
          <ul className={styles.list}>
            <li>
              <a href="#">cart</a>
            </li>
            <li>
              <a href="#">faq</a>
            </li>
            <li>
              <a href="#">contact us</a>
            </li>
            <li>
              <a href="#">instagram</a>
            </li>
          </ul>
          <ul className={styles.list}>
            <li>
              <a href="#">privacy policy</a>
            </li>
            <li>
              <a href="#">terms of service</a>
            </li>
          </ul>
        </div>
      </div>
      <p>@2022 website by Sepideh Biglarizadeh</p>
    </footer>
  );
};

export default Footer;
