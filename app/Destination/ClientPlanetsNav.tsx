"use client"
import { useState } from 'react';
import styles from './Destination.module.scss';
import Moon from './Moon';
const planets = ['moon', 'mars', 'europa', 'titan'];
export type planetsType = {
   id: number,
   name: string,
   description: string,
   image: string,
   distance: string,
   travelTime: string,
   isActive: boolean
}
export type transitionType = {
   translateX: string,
   opacity: number,
   transition: string
}
const planetsNav: Array<planetsType> = [{
   id: 0,
   name: 'Moon',
   description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
   image: '/image-moon.webp',
   distance: '384,400 KM',
   travelTime: '3 DAYS',
   isActive: true
},
{
   id: 1,
   name: 'Mars',
   description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
   image: '/image-mars.webp',
   distance: '225 MIL. km',
   travelTime: '9 months',
   isActive: false
},
{
   id: 2,
   name: 'EUROPA',
   description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
   image: '/image-europa.webp',
   distance: '628 MIL. km',
   travelTime: '3 years',
   isActive: false
},
{
   id: 3,
   name: 'TITAN',
   description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
   image: '/image-titan.webp',
   distance: '1.6 BIL. km',
   travelTime: '7 years',
   isActive: false
}
]
function ClientPlanetsNav() {
   const [planetRender, setPlanetRender] = useState<planetsType>(planetsNav[0]);
   const [isRender, setIsRender] = useState<boolean>(false);
   const [transition, setTransition] = useState({translateX: '0%', opacity: 1, transition: '1s'})
   function render(index: number) {
      if (planetRender.id === index) return;
      if (isRender) return;
      setIsRender(true);
      setTransition((prev) => ({...prev, translateX: '-100vw', opacity: 0}))
      setTimeout(() => {
         setTransition((prev) => ({...prev, transition: '0s'}));
         setPlanetRender(planetsNav[index])
      },1000)
      setTimeout(() => {
         setTransition((prev) => ({...prev, translateX: '100vw'}))
      },1001)
      setTimeout(() => {
         setTransition({translateX: '0%', opacity: 1, transition: '1s'});
         setIsRender(false);
      },1080)
   }
   return (
   <>
      <nav className={styles.destination__nav}>
         <ul className={styles.destination__navList}>
            {planets.map((el, index: number) => {
               return <li key={index} onClick={() => render(index)}
               className={`${styles.destination__navItem} ${planetRender.id === index ? styles.destination__active : ''}`}>{el}</li>
            })}
         </ul>
      </nav>
      <Moon planetRender={planetRender} transition={transition}/>
   </>
   )
}
export default ClientPlanetsNav;