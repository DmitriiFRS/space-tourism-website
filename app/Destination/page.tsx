import styles from './Destination.module.scss';
import ClientPlanetsNav from './ClientPlanetsNav';
function Destination() {
   return (
      <div className={`${styles.destination_container} container`}>
         <div className={styles.destination__titleBody}>
            <span className={styles.destination__num}>01</span>
            <h2 className={styles.destination__title}>Pick your destination</h2>
         </div>
         <ClientPlanetsNav />
      </div>
   )
}
export default Destination;