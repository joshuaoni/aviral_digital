import styles from './Hero.module.css';

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.top_content}>
          <div className={styles.hero_text}>
            <h2 className={styles.title}>World of <br /> <span>Words</span></h2>
            <p>A Gateway to seamless multilingual communication</p>
          </div>
          <div className={styles.hero_image}></div>
        </div>
        <div className={styles.bottom_content}>
          Welcome to our digital heaven where languages unite and barriers dissolve.
          At <span>Aviral Digital Solutions,</span> we are not just translators, we are architects
          of understanding in a diverse world. With our linguistic competence, we bridge
          cultures, empower businesses and amplify global connections. <br /><br />
          Our passion lies in transcending linguistic barriers, weaving words that
          resonate across languages including Hindi, Marathi, Telgu, Malayalam, Bengali,
          Odia and many more.
        </div>
      </section>
    </>
  )
}

export default Hero