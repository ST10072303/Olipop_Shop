import styles from "./Subscribe.module.css";

export const Subscribe = () => {
  return (
    <section className={styles.subscribe}>

      <h2>| Save 15% with Endless Olipop.</h2>
      <p>Never run out of your favourite flavors when you join our<br />
      fam. Subscribe and save on every order-- your wallet<br/>
      {"{"}and digestion{"}"} will thank you</p>
      <button>Subscribe & Save</button>

    </section>
  );
};