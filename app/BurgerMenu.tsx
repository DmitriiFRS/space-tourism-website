"use client"
import { useState } from 'react';
import BurgerNav from './BurgerNav';
import { navProps } from './HeaderNav';
import styles from './styles/Header.module.scss';
import BurgerClosed from './BurgerClosed';
import BurgerOpened from './BurgerOpened';
export type burgerStyleData = {
   opacity: number,
   left: string
}

function BurgerMenu({nav}: navProps) {
   const [burgerData, setData] = useState<burgerStyleData>({opacity: 0, left: '110vw'});
   const [isActive, setActive] = useState<boolean>(false);
   function toggleMenu() {
      setActive(!isActive);
      if (burgerData.opacity === 0) {
         setData({opacity: 1, left: '32%'})
      } else {
         setData({opacity: 0, left: '110vw'})
      }
   }
   return (
   <div className={styles.burger}>
      {isActive ? <BurgerClosed toggleMenu={toggleMenu} /> : <BurgerOpened toggleMenu={toggleMenu}/>}
      <BurgerNav nav={nav} burgerData={burgerData} toggleMenu={toggleMenu}/>
   </div>
   )
}
export default BurgerMenu;