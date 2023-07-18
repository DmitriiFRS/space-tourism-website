import styles from './Destination.module.scss';
import Image from 'next/image';
function Moon() {
   return (
   <div className={styles.moon}>
      <div className={styles.moon__imgBody}>
         <Image src='/image-moon.webp' alt='MoonPicture' fill={true} />
      </div>
      <div className={styles.moon__description}>
         <h2 className={styles.moon__title}>Moon</h2>
         <p className={styles.moon__subtitle}>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective
          and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
         </p>
         <div className={styles.moon__line}></div>
         <div className={styles.moon__stats}>
            <div className={styles.moon__statsTitleBody}>
               <h4 className={styles.moon__statsTitle}>AVG. DISTANCE</h4>
               <p className={styles.moon__statsValue}>384,400 km</p>
            </div>
            <div className={styles.moon__statsTitleBody}>
               <h4 className={styles.moon__statsTitle}>Est. travel time</h4>
               <p className={styles.moon__statsValue}>3 days</p>
            </div>
         </div>
      </div>
   </div>
   )
}
export default Moon;

// Перерисовывать с помощью useState обновлять весь объект с данными