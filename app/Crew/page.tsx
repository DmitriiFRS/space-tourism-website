import styles from './Crew.module.scss';
import CrewList from './CrewList';
function CrewPage() {
   return (
   <div className={`${styles.crew_container} container`}>
      <div className={styles.crew__titleBody}>
            <span className={styles.crew__num}>02</span>
            <h2 className={styles.crew__title}>MEET YOUR CREW</h2>
      </div>
      <CrewList />
   </div>
   )
}
export default CrewPage;