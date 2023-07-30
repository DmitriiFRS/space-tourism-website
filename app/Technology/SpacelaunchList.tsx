"use client"
import { useState } from 'react';
import styles from './Technology.module.scss';
import Image from 'next/image';
const btns = [1,2,3];
const spaceLaunchList = [{
   id: 0,
   name: 'LAUNCH VEHICLE',
   title: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth\'s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it\'s quite an awe-inspiring sight on the launch pad!',
   img: '/image-launch-vehicle-portrait.jpg',
   imgMobile: '/image-launch-vehicle-landscape.jpg',
   objectPosition: 'bottom'
},
{
   id: 1,
   name: 'SPACEPORT',
   title: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
   img: '/image-spaceport-portrait.jpg',
   imgMobile: '/image-spaceport-landscape.jpg',
   objectPosition: 'bottom'
},
{
   id: 2,
   name: 'SPACE CAPSULE',
   title: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth\'s atmosphere without wings. Our capsule is where you\'ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
   img: '/image-space-capsule-portrait.jpg',
   imgMobile: '/image-space-capsule-landscape.jpg',
   objectPosition: 'initial'
}
]
function SpaceLaunchList() {
   const [currentspaceLaunch, setSpaceLaunch] = useState(spaceLaunchList[0]);
   const [opacity, setOpacity] = useState(1);
   function changeSpaceLaunch(idx: number) {
      if (idx === currentspaceLaunch.id) return;
      setOpacity(0);
      setTimeout(() => {
         setSpaceLaunch(spaceLaunchList[idx])
         setOpacity(1);
      }, 400)
   }
   return (
   <div className={styles.spaceList}>
      <div className={styles.terminology}>
         <ul className={styles.terminology__btnList}>
            {btns.map((el, index) => {
               return (
                  <li className={styles.terminology__item}><button onClick={() => changeSpaceLaunch(index)}
                  className={`${styles.terminology__btn} ${index === currentspaceLaunch.id ? styles.terminology__active : ''}`}>{el}</button></li>
               )
            })}
         </ul>
         <div style={{opacity: opacity}} className={styles.terminology__titleBlock}>
            <h3 className={styles.terminology__theTerminology}>THE TERMINOLOGY…</h3>
            <h2 className={styles.terminology__title}>{currentspaceLaunch.name}</h2>
            <p className={styles.terminology__subtitle}>{currentspaceLaunch.title}</p>
         </div>
      </div>
      <div className={styles.terminology__img}>
         <Image style={{opacity: opacity, transition: '0.3s ease-in-out', objectFit: 'cover', objectPosition: currentspaceLaunch.objectPosition}} fill={true} src={currentspaceLaunch.img}  alt=''/>
      </div>
      <div className={styles.terminology__imgMobile}>
         <Image style={{opacity: opacity, transition: '0.3s ease-in-out'}} fill={true} src={currentspaceLaunch.img}  alt=''/>
      </div>
   </div>
   )
}
export default SpaceLaunchList;