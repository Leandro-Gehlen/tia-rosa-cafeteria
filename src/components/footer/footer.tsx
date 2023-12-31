import {Logo} from "../logo/logo"
import styles from "../footer/footer.module.css"


export const Footer = ()=>(
  <footer className={styles.container}>
  <div className={styles.rightsContainer}>
      <Logo />
      <span className={styles.copy}>&#169;</span>
      <span className={styles.rights}>All rights reserved</span>
    </div>
    <div className={styles.attContainer}>
      <span className={styles.att}>Coded by <a href='https://github.com/Leandro-Gehlen/tia-rosa-cafeteria' target='_blank'>Leandro Gehlen</a></span>
    </div>
  </footer>
)