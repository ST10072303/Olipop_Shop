import styles from "./Hero.module.css";
import heroCan from "../../assets/hero-can.png";
import { Button } from "../Button/Button";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <div className={styles.content}>
          <h1>A New Kind<br />of Soda<span className={styles.trademark}>&trade;</span></h1>
          <Button style={{width: '110px', height: '35px'}} text="Shop OLIPOP" /> 
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.circle}>
            <img src={heroCan} alt="OLIPOP Soda" className={styles.can}/>
          </div>
        </div>

        </div>
    </section>
  );
};