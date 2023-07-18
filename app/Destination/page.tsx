'use client'
import styles from './Destination.module.scss';
import Image from 'next/image';
import Moon from './Moon';
import PlanetsWrapper from './Wrapper';
const planets = ['moon', 'mars', 'europa', 'titan'];
function Destination() {
   return (
   <div className={styles.destination}>
      <div className={styles.destination__imgBody}>
        <Image src="/background-destination-desktop.jpg"style={{objectFit: "cover"}} quality={100} fill={true} priority={true} alt="" />
      </div>
      <div className={`${styles.destination_container} container`}>
         <div className={styles.destination__titleBody}>
            <span className={styles.destination__num}>01</span>
            <h2 className={styles.destination__title}>Pick your destination</h2>
         </div>
         <nav className={styles.destination__nav}>
            <ul className={styles.destination__navList}>
               {planets.map((el, index) => {
                  return <li key={index} className={styles.destination__navItem}>{el}</li>
               })}
            </ul>
         </nav>
         <PlanetsWrapper>
            <Moon />
         </PlanetsWrapper>
      </div>
   </div>
   )
}
export default Destination;