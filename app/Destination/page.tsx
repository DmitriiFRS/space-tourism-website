import styles from './Destination.module.scss';
import Moon from './Moon';
import ClientNav from './ClientNav';
const planets = ['moon', 'mars', 'europa', 'titan'];
function Destination() {
   return (
      <div className={`${styles.destination_container} container`}>
         <div className={styles.destination__titleBody}>
            <span className={styles.destination__num}>01</span>
            <h2 className={styles.destination__title}>Pick your destination</h2>
         </div>
         <ClientNav />
      </div>
   )
}
export default Destination;