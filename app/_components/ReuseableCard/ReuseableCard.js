import React from 'react';
import styles from './ReuseableCard.module.css';
import Image from 'next/image';

const ReuseableCard = ({ item }) => {
  return (
    <>
      <div className={styles.card}>
        <Image
          alt='icon'
          height={60}
          width={60}
          src={`/${item.icon}`}
        />
        <h4 className={styles.title}>{item.title}</h4>
        <p className={styles.description}>{item.body}</p>
        <span className={styles.btn}>Learn More</span>
      </div>
    </>
  )
}

export default ReuseableCard