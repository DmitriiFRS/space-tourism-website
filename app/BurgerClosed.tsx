"use client"
import styles from './styles/Header.module.scss';

function BurgerClosed({toggleMenu}: {toggleMenu: () => void}) {
   return (
      <button onClick={toggleMenu} className={styles.burger__iconBody}>
         <span className={styles.burger__iconClose1}></span>
         <span className={styles.burger__iconClose2}></span>
      </button>
   )
}
export default BurgerClosed;