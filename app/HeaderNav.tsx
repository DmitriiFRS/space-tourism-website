"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles/Header.module.scss';
import { navType } from './Header';
export type navProps = {
   nav: Array<navType>
}
function HeaderNav({nav}: navProps) {
   const pathname = usePathname();
   return (
      <ul className={styles.header__list}>
         {nav.map((el, index) => {
            return(
            <li className={`${styles.header__item} ${pathname === el.href ? styles.header__itemActive : ''}`} key={index}>
               <Link style={{color: 'inherit', height: '96px', display: 'flex', alignItems: 'center'}} href={el.href}>
                  <span className={styles.header__num}>{el.num}</span>
                  <span className={styles.header__title}>{el.title}</span>
               </Link>
            </li>)
         })}
      </ul>
   )
}
export default HeaderNav;