import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import pinterest from "../../assets/pinterest.png";
import { Button } from "../Button/Button";


export const Footer = () => {
  return (
    <footer className={styles.footer}>
  <div className={styles.container}>
    <div>
    <div className={styles.brand}>
      <img src={logo} alt="logo" className={styles.logo}/>
      <h3>Stay Connected With <br/>OLIPOP</h3>
      </div>
      <input type="email" placeholder="Enter your email"/>
     <Button style={{width: '250px', height: '38px'}} text="Subscribe" /> 
    </div>

    {/* Flavours Column */}
    <div className={styles.linksColumn}>
      <h4>Flavours</h4>
      <ul>
        <li><a href="#">Watermelon Lime</a></li>
        <li><a href="#">Vintage Cola</a></li>
        <li><a href="#">Classic Root Beer</a></li>
        <li><a href="#">Doctor Goodwin</a></li>
        <li><a href="#">Banana Cream</a></li>
        <li><a href="#">Strawberry Vanilla</a></li>
        <li><a href="#">Ginger Lemmon</a></li>
      </ul>
    </div>

    {/* Information Column */}
    <div className={styles.linksColumn}>
      <h4>Information</h4>
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">FAQ</a></li>
      </ul>
    </div>

    {/* Social Column */}
    <div className={styles.linksColumn}>
  <h4>Social Media</h4>
  <div className={styles.socialIcons}>
    <a href="#" aria-label="Facebook"><img src={facebook} alt="facebook" /></a>
    <a href="#" aria-label="Instagram"><img src={instagram} alt="instagram" /></a>
    <a href="#" aria-label="Twitter"><img src={twitter} alt="twitter" /></a>
    <a href="#" aria-label="LinkedIn"><img src={linkedin} alt="linkedIn" /></a>
    <a href="#" aria-label="Pinterest"><img src={pinterest} alt="pinterest" /></a>
  </div>
</div>
  </div>
</footer>
  );
};
