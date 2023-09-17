import Image from 'next/image'
import styles from '../logo/logo.module.css'

export const Logo = ()=>{
  return(
    <div className={styles.logo}>
        <div>
          <Image
          src="/logo-coffee-pink.svg"
          width={40}
          height={40}
          alt='coffee shop logo'
          />
        </div>
        <span>Tia Rosa</span>
    </div>
  
  )
}