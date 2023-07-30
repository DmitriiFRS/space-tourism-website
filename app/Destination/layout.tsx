import { ReactNode } from "react";
import styles from './Destination.module.scss';
import Image from "next/image";
function PlanetsLayout ({children}: {children: ReactNode}) {
   return (
      <div className={styles.destination}>
         <div className={styles.destination__imgBody}>
        <Image src="/background-destination-desktop.jpg"style={{objectFit: "cover"}} quality={100} fill={true} loading='eager' alt="" />
         </div>
         {children}
      </div>
   )
}

export default PlanetsLayout;

