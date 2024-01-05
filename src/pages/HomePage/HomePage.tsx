import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import ProductList from "../../components/ProductList";
import { useProducts } from "../../contexts/ProductsContext";

export default function HomePage() {
  const products = useProducts();

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
        <Link to="/store" className="button">
          Shop Now
        </Link>
      </section>
      <section className={styles.featuredSection}>
        <h2>Featured Items</h2>
        <ProductList
          products={products}
        />
      </section>
    </main>
  );
}
