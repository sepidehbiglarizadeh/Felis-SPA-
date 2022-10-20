import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css"

const SideBar = () => {
  return (
    <ul className={styles.sideBar}>
      <li>
        <NavLink
          to={"/profile/dashboard"}
          className={(navData) => (navData.isActive ? styles.activeClass : "")}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/profile/favorites"}
          className={(navData) => (  navData.isActive ? styles.activeClass : "")}
        >
          Favorites
        </NavLink>
      </li>
    </ul>
  );
};

export default SideBar;
