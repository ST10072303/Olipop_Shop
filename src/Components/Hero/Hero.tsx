import styles from "./Hero.module.css";
import heroCan from "../../assets/hero-can.png";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <div className={styles.content}>
          <h1>A New Kind<br />of Soda<span className={styles.trademark}>&trade;</span></h1>
          <button className={styles.button}>Read More</button>
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