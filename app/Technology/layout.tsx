import { ReactNode } from "react";
import styles from './Technology.module.scss';
import Image from "next/image";

function LaunchLayout({children}: {children: ReactNode}) {
   return (
      <div className={styles.technology}>
         <div className={styles.technology__imgBody}>
        <Image src="/background-technology-desktop.jpg"style={{objectFit: "cover"}} quality={100} fill={true} priority={true} alt="" />
         </div>
         {children}
      </div>
   )
}
export default LaunchLayout;