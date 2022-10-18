import styles from "./Navigation.module.css";
import { MdClose } from "react-icons/md";

const items = [
  { name: "Home", to: "/" },
  { name: "Jewelry", to: "/jewelry" },
  { name: "About-us", to: "/about-us" },
  { name: "Blog", to: "/blog" },
  { name: "Profile", to: "/profile" },
];

const Navigation = ({navRef}) => {

  const closeMenu=()=>{
    navRef.current.style.right= "-600px";
    navRef.current.style.display= "none";

  }

  return (
    <nav className={styles.navigation} ref={navRef}>
      <div className={styles.closeIcon}>
        <button onClick={closeMenu}>
          <MdClose />
        </button>
      </div>
      {items.map((item) => {
        return <li key={item.to}>{item.name}</li>;
      })}
    </nav>
  );
};

export default Navigation;
