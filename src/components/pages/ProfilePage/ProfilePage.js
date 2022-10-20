import { Outlet } from "react-router-dom";
import SideBar from "../../SideBar/SideBar";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <section className={styles.profile}>
      <h3>This is profile Page</h3>
      <div className={styles.container}>
        <SideBar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
