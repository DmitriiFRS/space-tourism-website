"use client"
import styles from './styles/Header.module.scss';

function BurgerOpened({toggleMenu}: {toggleMenu: () => void}) {
   return (
      <button onClick={toggleMenu} className={styles.burger__iconBody}>
         <span className={styles.burger__icon}></span>
         <span className={styles.burger__icon}></span>
         <span className={styles.burger__icon}></span>
      </button>
   )
}
export default BurgerOpened;