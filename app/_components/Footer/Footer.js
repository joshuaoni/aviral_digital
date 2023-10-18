import styles from './Footer.module.css';
import Link from 'next/link';
import { footerLinks } from '@/app/_constants';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <div className={styles.container}>
            <div className={styles.links}>
              {footerLinks.map(item => (
                <div key={item.title} className={styles.link}>
                  <h3>{item.title}</h3>
                  {item.links.map(item => (
                    <Link
                      href='/'
                      key={item}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bottom}>
            <p>@ 2023. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer