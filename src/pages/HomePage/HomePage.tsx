import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <section>
        <h1>Welcome to the home page!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum
          eum ipsum assumenda consequuntur veniam quas? Sapiente dolore fuga
          facere, laudantium voluptatibus veritatis, voluptas tempora temporibus
          exercitationem, quasi consectetur quibusdam.
        </p>
        <button type="button">Shop Now</button>
      </section>
      <section>
        <h2>Featured Items</h2>
        <ul className={styles.featuredItems}>
          <li>
            <img src="/images/placeholder.png" alt="Placeholder" />
            <p>Item 1</p>
          </li>
          <li>
            <img src="/images/placeholder.png" alt="Placeholder" />
            <p>Item 2</p>
          </li>
          <li>
            <img src="/images/placeholder.png" alt="Placeholder" />
            <p>Item 3</p>
          </li>
          <li>
            <img src="/images/placeholder.png" alt="Placeholder" />
            <p>Item 4</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
