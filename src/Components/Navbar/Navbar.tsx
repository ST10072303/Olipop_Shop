
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <img src={logo} alt="OLIPOP Logo" className={styles.logo} />

        <nav className={styles.navLinks} >
          <a href="#">Shop Online</a>
          <a href="#">Find In Store</a>
          <a href="#">Learn More</a>
        </nav>
        <button className={styles.subscribeBtn}>Subscribe</button>
       
      </div>
    </header>
  );
};
