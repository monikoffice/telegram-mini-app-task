import styles from "./page.module.css";

export default function Home() {
  const apiKey = process.env.API_KEY;

  return (
    <main className={styles.main}>
      <h1>{apiKey}</h1>
    </main>
  );
}
