import styles from './styles/Header.module.scss';
import Logo from './icons/logo';
import homeCover from './imges/background-home-desktop.jpg';

function Header() {
   const nav = [{
      title: 'home', num: '00', isActive: true}, {title: 'destination', num: '01', isActive: false},
      {title: 'crew', num: '02', isActive: false}, {title: 'technology', num: '03', isActive: false}
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
                  <li className={`${styles.header__item} ${el.isActive ? styles.header__itemActive : ''}`} key={index}>
                     <span className={styles.header__num}>{el.num}</span>
                     <span className={styles.header__title}>{el.title}</span>
                  </li>)
               })}
            </ul>
         </nav>
      </div>
   </header>
   )
}
export default Header;