import styles from "./Navigation.module.css";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const items = [
  { name: "Home", to: "/" },
  { name: "Jewelry", to: "/jewelry" },
  { name: "About-us", to: "/about-us" },
  { name: "Blog", to: "/blog" },
  { name: "Profile", to: "/profile" },
];

const Navigation = ({ navOpen, setNavOpen }) => {
  const closeMenu = () => {
    setNavOpen((prevState) => !prevState);
  };

  return (
    <nav className={`${styles.navigation} ${navOpen ? styles.showMenu : ""} `}>
      <div className={styles.closeIcon}>
        <button onClick={closeMenu}>
          <MdClose />
        </button>
      </div>
      {items.map((item) => {
        return (
          <li key={item.to}>
            <NavLink
              end
              to={item.to}
              className={(navData) =>
                navData.isActive ? styles.activeClass : styles.Color
              }
              onClick={() => setNavOpen((prevState) => !prevState)}
            >
              {item.name}
            </NavLink>
          </li>
        );
      })}
    </nav>
  );
};

export default Navigation;
