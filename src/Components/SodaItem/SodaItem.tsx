import styles from "./SodaItem.module.css";

// receive soda items as props
interface SodaItemProps{
    image:string;
    title:string;
    price:number;
    background:string;
}
// using soda items props in a functional component
// destructuring props
export const SodaItem = ({image, title, price, background}:SodaItemProps)=>
{
    return(
        /*Soda items card template receives the soda items props.
        the items can change but this template stays the same*/
        <div className={styles.card}
            style={{backgroundColor:background}}>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <span>${price}</span>
        </div>
        );
};