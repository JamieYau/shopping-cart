import styles from "./HomePage.module.css";
import ProductCard from "../../components/ProductCard";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <section className={styles.introSection}>
        <h1>Welcome to the home page!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum
          eum ipsum assumenda consequuntur veniam quas? Sapiente dolore fuga
          facere, laudantium voluptatibus veritatis, voluptas tempora temporibus
          exercitationem, quasi consectetur quibusdam.
        </p>
        <button type="button">Shop Now</button>
      </section>
      <section className={styles.featuredSection}>
        <h2>Featured Items</h2>
        <ul className={styles.featuredItems}>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
        </ul>
      </section>
    </div>
  );
}
