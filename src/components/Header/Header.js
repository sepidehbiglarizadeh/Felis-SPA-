import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";
import { FaBars } from "react-icons/fa";
import { useRef, useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const showMenu = () => {
    setNavOpen((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <h1>FELIS</h1>
      <Navigation navOpen={navOpen} setNavOpen={setNavOpen} />
      <FaBars className={styles.barIcon} onClick={showMenu} />
    </header>
  );
};

export default Header;
