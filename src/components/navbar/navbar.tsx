import Image from 'next/image'
import styles from '../navbar/navbar.module.css'

export const NavBar = ()=>{
  return(
    <nav className={styles.navcontainer}>
      <div className={styles.logo}>
        <div>
          <Image
          src="/logo-coffee.svg"
          width={40}
          height={40}
          alt='coffee shop logo'
          />
        </div>
        <span>Coffee Shop - Tia Rosa</span>
      </div>
      <ul className={styles.menu}>
        <li className={styles.item}>Sobre</li>
        <li className={styles.item}>Produtos</li>
        <li className={styles.item}>Contato</li>
      </ul>
    </nav>
  )
}