import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";
import { FaBars } from "react-icons/fa";
import { useRef } from "react";

const Header = () => {
  const navRef = useRef();

  const showMenu=()=>{
    navRef.current.style.right="0";
    navRef.current.style.display="block";

  }

  return (
    <header className={styles.header}>
      <h1>FELIS</h1>
      <Navigation navRef={navRef} />
      <FaBars className={styles.barIcon} onClick={showMenu}/>
    </header>
  );
};

export default Header;
