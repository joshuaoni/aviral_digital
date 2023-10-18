import styles from './page.module.css';
import { Explore, Footer, Hero, Navbar, Projects, Values } from './_components';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      <Hero />

      <Explore />

      <Values />

      <Projects />

      <Footer />
    </main>
  )
}
