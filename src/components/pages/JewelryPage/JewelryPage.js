import jewelry1 from "../../../assets/images/jewelry1.png";
import jewelry2 from "../../../assets/images/jewelry2.png";
import jewelry3 from "../../../assets/images/jewelry3.png";
import styles from "./JewelryPage.module.css";

const jewelries = [
  { id: 1, name: "Necklece", imgSrc: jewelry1 },
  { id: 2, name: "Bracelet", imgSrc: jewelry2 },
  { id: 3, name: "Necklece", imgSrc: jewelry3 },
];

const JewelryPage = () => {
  return (
    <section className={styles.jewelrySection}>
      <h3>Our Favorites</h3>
      <div className={styles.jewelryContainer}>
        {jewelries.map((item) => {
          return (
            <div key={item.id} className={styles.jewelryItem}>
              <img src={item.imgSrc} />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default JewelryPage;
