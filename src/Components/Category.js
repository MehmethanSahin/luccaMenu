import styles from "./Category.module.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClover } from "@fortawesome/free-solid-svg-icons";

const Category = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}></div>
      <h1 className={styles.logo}>
        Lucc
        <FontAwesomeIcon icon={faClover} className={`${styles.icon} `} />
      </h1>
      <h2 className={styles.slogan}>Daima Evinde gibi Hissettirir </h2>
      <div className={styles.menu}>
        <div className={styles.category}>
          <img
            src="https://i.pinimg.com/474x/1d/0b/48/1d0b480c6548337b8b5377dd6ec7e657.jpg"
            alt="Salads"
            className={`${styles.image} ${styles.salad}`}
          />
          <div className={styles.overlay}>
            <Link to="salata" offset={-70} smooth={true} duration={500}>
              Salatalar
            </Link>
          </div>
        </div>
        <div className={styles.category}>
          <img
            src="https://i.pinimg.com/474x/f6/88/c3/f688c35227011aa59109b1843fecffbb.jpg"
            alt="Drinks"
            className={`${styles.image} ${styles.drink}`}
          />
          <div className={styles.overlay}>
            <Link to="içecekler" offset={-70} smooth={true} duration={500}>
              İçecekler
            </Link>
          </div>
        </div>
        <div className={styles.category}>
          <img
            src="https://i.pinimg.com/564x/b3/4a/76/b34a76bc0d3ae876018c4201f03eab56.jpg"
            alt="Desserts"
            className={`${styles.image} ${styles.dessert}`}
          />
          <div className={styles.overlay}>
            <Link
              to="tatlı"
              smooth={true}
              offset={-70}
              duration={500}
              activeClass={styles.active}
            >
              Tatlılar
            </Link>
          </div>
        </div>
        <div className={styles.category}>
          <img
            src="https://i.pinimg.com/564x/2b/b8/66/2bb8661adb7be75b8de6a213da8dcbe3.jpg"
            alt="Meals"
            className={`${styles.image} ${styles.meal}`}
          />
          <div className={styles.overlay}>
            <Link
              to="yemek"
              smooth={true}
              offset={-70}
              duration={500}
              activeClass={styles.active}
            >
              Ana Yemekler
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
