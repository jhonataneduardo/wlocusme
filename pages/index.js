import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wlocus - Desenvolvimento Web</title>
        <meta name="description" content="Estúdio de Desenvolvimento Web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
      <main className={styles.main}>
        <div className={styles.logo}>
          <h2 className={styles.text}>wlocus<span className={styles.detail}>.</span>me</h2>
          <p>estúdio de desenvolvimento web</p>
        </div>
      </main>
      </div>
    </div>
  );
}
