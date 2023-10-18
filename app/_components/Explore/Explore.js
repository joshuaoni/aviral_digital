import styles from './Explore.module.css';
import { ReuseableCard } from '../index';
import { exploreContent } from '@/app/_constants';

const Explore = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.title}>
          <h3>
            Explore our <span>Language</span> Swags:
          </h3>
        </div>
        <div className={styles.items}>
          {exploreContent.map(item => (
            <ReuseableCard
              key={item.title}
              item={item}
            />
          ))}
        </div>
      </section>
      <div className={styles.bottom_content}>
        Join us in celebrating India’s linguistic diversity. Your words,
        our expertise- a fusion that echoes across borders. Welcome to <span>Aviral Digital Solutions,</span> where languages unite and communication knows no bounds.
      </div>
    </>
  )
}

export default Explore