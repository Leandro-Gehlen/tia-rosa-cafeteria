
import { Logo } from '../logo/logo'
import styles from '../navbar/navbar.module.css'

export const NavBar = ()=>{
  return(
    <nav className={styles.navcontainer}>
      <Logo/> 
      <ul className={styles.menu}>
        <li className={styles.item}>Sobre</li>
        <li className={styles.item}>Produtos</li>
        <li className={styles.item}>Contato</li>
      </ul>
    </nav>
  )
}