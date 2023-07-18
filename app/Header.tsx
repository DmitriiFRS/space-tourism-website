'use client'
import styles from './styles/Header.module.scss';
import Logo from './icons/logo';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
function Header() {
   const pathname = usePathname();
   const nav = [{
      title: 'Home', num: '00', href: '/'}, {title: 'Destination', num: '01', href: '/Destination'},
      {title: 'Crew', num: '02', href: '/Crew'}, {title: 'Technology', num: '03', href: '/Technology'}
   ]
   return (
   <header className={styles.header}>
      <div className={styles.header__blur}></div>
      <div className={`${styles.header_container} container`}>
         <div className={styles.header__logoBody}>
            <Logo />
         </div>
         <div className={styles.header__line}></div>
         <nav className={styles.header__nav}>
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
         </nav>
      </div>
   </header>
   )
}
export default Header;
//<Link href="/about"></Link>