import styles from './styles/Header.module.scss';
import Logo from './icons/logo';
import HeaderNav from './HeaderNav';
import BurgerMenu from './BurgerMenu';
export type navType = {
   [key: string]: string
}
function Header() {
   const nav: Array<navType> = [{
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
            <HeaderNav nav={nav}/>
            <BurgerMenu nav={nav} />
         </nav>
      </div>
   </header>
   )
}
export default Header;
//<Link href="/about"></Link>