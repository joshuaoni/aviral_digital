import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <Image
            alt='logo'
            height={60}
            width={107}
            src='/logo.jpeg'
          />

          <p>Aviral Digital Solutions</p>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Languages</li>
            <li>Company</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar