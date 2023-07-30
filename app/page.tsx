import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main__imgBody}>
        <Image src="/background-home-desktop.jpg"style={{objectFit: "cover"}} quality={100} fill={true} priority={true} alt="background" />
      </div>
      <div className={styles.main__imgBodyMobile}>
        <Image src="/background-home-mobile.jpg" quality={100} fill={true} loading='eager' alt="background" />
      </div>
      <div className={`${styles.main_container} container`}>
        <div className={styles.main__titleBody}>
          <h1 className={styles.main__title}>SO, YOU WANT TO TRAVEL TO <span>space</span></h1>
          <h2 className={styles.main__subtitle}>Let’s face it; if you want to go to space,
            you might as well genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this world experience!
          </h2>
        </div>
        <div className={styles.main__btnBody}>
          <button className={styles.main__btn}>explore</button>
        </div>
      </div>
    </main>
  )
}
