"use client"
import styles from './Destination.module.scss';
import Image from 'next/image';
import { planetsType, transitionType } from './ClientNav';

function Moon({planetRender, transition}: {planetRender: planetsType, transition: transitionType}) {
   return (
   <div className={styles.moon} style={{transform: `translateX(${transition.translateX})`, transition: transition.transition, opacity: transition.opacity}}>
      <div className={styles.moon__imgBody}>
         <Image src={planetRender.image} alt='MoonPicture' fill={true} />
      </div>
      <div className={styles.moon__description}>
         <h2 className={styles.moon__title}>{planetRender.name}</h2>
         <p className={styles.moon__subtitle}>{planetRender.description}</p>
         <div className={styles.moon__line}></div>
         <div className={styles.moon__stats}>
            <div className={styles.moon__statsTitleBody}>
               <h4 className={styles.moon__statsTitle}>AVG. DISTANCE</h4>
               <p className={styles.moon__statsValue}>{planetRender.distance}</p>
            </div>
            <div className={styles.moon__statsTitleBody}>
               <h4 className={styles.moon__statsTitle}>Est. travel time</h4>
               <p className={styles.moon__statsValue}>{planetRender.travelTime}</p>
            </div>
         </div>
      </div>
   </div>
   )
}
export default Moon;

// Перерисовывать с помощью useState обновлять весь объект с данными