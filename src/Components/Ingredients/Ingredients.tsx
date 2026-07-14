import styles from "./Ingredients.module.css";

import flavour from "../../assets/flavour.png";

export const Ingredients = () => {
  return (
    <section className={styles.ingredients}>

      <div className={styles.card}>

        <img src={flavour} alt="Ingredients"/>
        <div>
          <h2>| Our Foundational Ingredients</h2>
          <p>For over a decade. Ben and David have shared a visoin of a healthier, easier future. Their <br />
             quest for a product that could undermine the old guard of soder behaviour led them to <br />
             OLIPOP, a thoughtfully crafted tonic  that found its taste in wholesome, nourishing <br />
             ingredients instead of spoonfull of sugar.</p>
            
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </section>
  );
};