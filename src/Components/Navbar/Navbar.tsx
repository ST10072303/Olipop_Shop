import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "@/assets/logo.png";
import { Button } from "../Button/Button";

export const Navbar = () => {
  {/*Memory state hook */}
  const [isOpen, setIsOpen] = useState(false);
  {/*Toggle Function */}
  const toggleMenu = () => {
    setIsOpen(!isOpen);{/*updates the state 'toggle menu on/off' */}
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <img src={logo} alt="OLIPOP Logo" className={styles.logo} />

        {/* hamburger bar icon */}
        <button className={`${styles.hamburger} ${isOpen ? styles.activeHamburger : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation">
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        <nav className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <a href="#" onClick={() => setIsOpen(false)}>Shop Online</a>
          <a href="#" onClick={() => setIsOpen(false)}>Find In Store</a>
          <a href="#" onClick={() => setIsOpen(false)}>Learn More</a>
        </nav>

        <div className={styles.navButton}>
          <Button style={{width: '85px', height: '35px'}} text="Subscribe" />
        </div>
      </div>
    </header>
  );
};