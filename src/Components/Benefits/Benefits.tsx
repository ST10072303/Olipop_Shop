import styles from "./Benefits.module.css";
import promo from "../../assets/promo.png";
import cup from "../../assets/cup.png";
import dollar from "../../assets/dollar.png";
import truck from "../../assets/truck.png";
import cross from "../../assets/cross.png";

export const Benefits = () => {
  return (
    <section className={styles.promo}>
      {/* Left Column */}
      <div className={styles.column}>
        <div className={styles.textGroup}>
          <img src={dollar} alt="" className={styles.icon} />
          <p>Save 15% on every order</p>
        </div>
        <div className={styles.textGroup}>
          <img src={cup} alt="" className={styles.icon} />
          <p>Early access to new flavours</p>
        </div>
      </div>

      {/* Center Column with image */}
      <div className={styles.imageContainer}>
        <img src={promo} alt="promo picture" className={styles.promoImg} />  
      </div>

      {/* Right Column */}
      <div className={styles.column}>
        <div className={styles.textGroup}>
          <img src={truck} alt="" className={styles.icon} />
          <p>Free shipping Always</p>
        </div>
        <div className={styles.textGroup}>
          <img src={cross} alt="" className={styles.icon} />
          <p>Swap skip or cancel any time</p>
        </div>
      </div>
    </section>
  );
};