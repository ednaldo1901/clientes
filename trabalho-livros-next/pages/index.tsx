import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../styles/Home.module.css';



const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loja</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
};

export default Home;
