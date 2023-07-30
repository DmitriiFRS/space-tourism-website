"use client"

import Link from "next/link";
import styles from './styles/Header.module.scss';
import { usePathname } from "next/navigation";
import { navType } from "./Header";
import { burgerStyleData } from "./BurgerMenu";
type BurgerNavProps = {
   nav: Array<navType>,
   burgerData: burgerStyleData,
   toggleMenu: () => void
}

function BurgerNav({nav, burgerData, toggleMenu}: BurgerNavProps) {
   const pathname = usePathname();
   return (
      <ul style={{opacity: burgerData.opacity, left: burgerData.left}} className={styles.headerM__list}>
         {nav.map((el, index) => {
            return(
            <li className={`${styles.headerM__item} ${pathname === el.href ? styles.headerM__itemActive : ''}`} key={index}>
               <Link onClick={toggleMenu} style={{color: 'inherit', display: 'flex', alignItems: 'center'}} href={el.href}>
                  <span className={styles.headerM__num}>{el.num}</span>
                  <span className={styles.headerM__title}>{el.title}</span>
               </Link>
            </li>)
         })}
      </ul>
   )
}
export default BurgerNav;