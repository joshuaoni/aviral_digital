import styles from './Values.module.css';

const Values = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.box}>
          <h2 className={styles.title}>Mission:</h2>
          <p>Our mission is to break down language barriers and foster understanding
            by providing top-notch translation services in a multitude of Indian languages. </p>
          <h2 className={styles.title}>Vision:</h2>
          <p>Our vision is to be the cornerstone of communication in India, connecting
            businesses, communities and individuals through accurate and culturally
            sensitive translations.</p>
        </div>
      </section>
    </>
  )
}

export default Values