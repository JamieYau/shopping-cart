import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; 2021 <a href="https://github.com/JamieYau">Jamie Yau</a>
      </p>
    </footer>
  );
}
