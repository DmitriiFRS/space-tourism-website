import SpaceLaunchList from './SpacelaunchList';
import styles from './Technology.module.scss'

function LaunchPage() {
   return (
      <div className={`${styles.technology_container} container`}>
         <div className={styles.technology__titleBody}>
            <span className={styles.technology__num}>03</span>
            <h2 className={styles.technology__title}>SPACE LAUNCH 101</h2>
         </div>
         <SpaceLaunchList />
      </div>
   )
}
export default LaunchPage;