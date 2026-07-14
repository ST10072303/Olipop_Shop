import { SodaItem } from "../SodaItem/SodaItem";
import styles from "./ProductSection.module.css";
import { products } from "../../data/products";


export const ProductSection = () => {
  return (
    <section className={styles.products}>

      <h2>Taste Your Favourite</h2>
      <p>Enjoy our take on the classic flavours you know and love</p>
      {/* mapping/looping though products array in products.ts and creating one sodaItem card for every item*/}
      <div className={styles.grid}> {products.map((product) => 
         ( 
          <SodaItem
            key={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
            background={product.background}/>
        ))}
      </div>
    </section>
  );
};