import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import ProductList from "../../components/ProductList";

export default function HomePage() {
  return (
    <main className={styles.homePage}>
      <section className={styles.introSection}>
        <h1>Welcome to the home page!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum
          eum ipsum assumenda consequuntur veniam quas? Sapiente dolore fuga
          facere, laudantium voluptatibus veritatis, voluptas tempora temporibus
          exercitationem, quasi consectetur quibusdam.
        </p>
        <Link to="/store" className="button">Shop Now</Link>
      </section>
      <section className={styles.featuredSection}>
        <h2>Featured Items</h2>
        <ProductList
          products={[
            {
              id: 1,
              name: "Product 1",
              price: 9.99,
            },
            {
              id: 2,
              name: "Product 2",
              price: 19.99,
            },
            {
              id: 3,
              name: "Product 3",
              price: 29.99,
            },
            {
              id: 4,
              name: "Product 4",
              price: 39.99,
            },
          ]}
        />
      </section>
    </main>
  );
}
