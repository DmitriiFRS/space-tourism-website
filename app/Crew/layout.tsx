import { ReactNode } from "react";
import styles from './Crew.module.scss';
import Image from "next/image";
function CrewLayout ({children}: {children: ReactNode}) {
   return (
      <div className={styles.crew}>
         <div className={styles.crew__imgBody}>
        <Image src="/background-crew-desktop.jpg"style={{objectFit: "cover"}} quality={100} fill={true} loading='eager' alt="" />
         </div>
         {children}
      </div>
   )
}

export default CrewLayout