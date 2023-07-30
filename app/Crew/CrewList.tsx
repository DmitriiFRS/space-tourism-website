"use client"
import { useState } from 'react';
import styles from './Crew.module.scss';
import Image from 'next/image';
const paginate = [0,1,2,3];
const astronauts = [{
   id: 0,
   spec: 'Commander',
   name: 'Douglas Hurley',
   description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
   img: '/image-douglas-hurley.webp',
   imgWidth: 568,
   imgHeight: 700
},
{
   id: 1,
   spec: 'Mission Specialist ',
   name: 'MARK SHUTTLEWORTH',
   description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
   img: '/image-mark-shuttleworth.webp',
   imgWidth: 453,
   imgHeight: 654
},
{
   id: 2,
   spec: 'PILOT',
   name: 'Victor Glover',
   description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
   img: '/image-victor-glover.webp',
   imgWidth: 554,
   imgHeight: 681
},
{
   id: 3,
   spec: 'Flight Engineer',
   name: 'Anousheh Ansari',
   description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
   img: '/image-anousheh-ansari.webp',
   imgWidth: 615,
   imgHeight: 607
}
]
function CrewList() {
   const [astronaut, setAstronaut] = useState(astronauts[0]);
   const [opacity, setOpacity] = useState(1);
   function changeAstronaut(id: number) {
      if (id === astronaut.id) return;
      setOpacity(0);
      setTimeout(() => {
         setAstronaut(astronauts[id]);
         setOpacity(1)
      }, 400)
   }
   return (
   <div className={styles.crewlist}>
      <div className={styles.crewlist__description} style={{opacity: opacity}}>
         <h2 className={styles.crewlist__headerTitle}>{astronaut.spec}</h2>
         <h3 className={styles.crewlist__name}>{astronaut.name}</h3>
         <h4 className={styles.crewlist__subtitle}>{astronaut.description}</h4>
      </div>
      <div className={styles.crewlist__pagination}>
         {paginate.map((el, index) => {
            return (
               <div key={index} onClick={() => changeAstronaut(index)} className={styles.crewlist__paginationContainer}>
                  <button className={`${styles.crewlist__paginationDot} ${astronaut.id === index ? styles.crewlist__activeDot : ''}`}></button>
               </div>
            ) 
         })}
      </div>
      <div className={styles.crewlist__img} style={{width: `${astronaut.imgWidth}px`, height: `${astronaut.imgHeight}px`, opacity: opacity}}>
         <Image src={astronaut.img} quality={100} fill={true} loading='eager' alt='Douglas-hurley' />
      </div>
   </div>
   )
}
export default CrewList;