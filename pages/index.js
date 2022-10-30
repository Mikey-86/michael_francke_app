import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home(){
  return(
      <div className={styles.Header}>
        
        <h1>Hi, I&apos;m Michael Francke</h1>

      <main>
      <div className={styles.Center}>

        <p><Image src="/Michael.jpg" alt='Michaels face' width="600" height="600"/></p> 
        <p className={styles.card}>Computer hardware nerd, video game enthusiast and (self-proclaimed) expert pool player.</p>
       
      </div>
      
      <div className={styles.Center}>

        <p className={styles.cardText}>
          I enjoy learning and challenging myself as much as I can in life. 
          utside of my work I hang out with my friends, we usually play pool, go camping or play soccer. I also enjoy cycling with my sister on the weekend.
          I am knowledgeable about computer hardware from my experience in building my own computer and I thoroughly enjoy learning about new hardware. 
          I also have an interest in investing, cyrptocurreny and learning about blockchain tech and its interesting applications.
        </p>
        
      </div>

      <div>

      <Image src="/Cycling.jpg" alt='Cycling' width="600" height="600" className={styles.Left}/>
      <Image src="/Pool.jpg" alt='Pool' width="600" height="600" className={styles.Right}/>
      <Image src="/MyComputer.jpg" alt='Computer' width="660" height="600" className={styles.CenterPic}/>

      </div>
      </main>

      <div>

        <p></p>
      <p className={styles.card}>Why I want to work at SovTech</p>
      <p className={styles.cardText}>
        I want to be a developer at SovTech because I want to be apart of the leading software development company in Africa!
        I really enjoed meeting members of the team at my university&apos;s career day, they left such a positive impression on me and made me eager to join the SovTech team.
        I also really relate to the company&apos;s Spex: Smile and Adapt, as these values are important to me.
        I am also interested in the technology stacks that the company works with as I mainly code on C# and Java, this is my first time using React, but I would love to learn and become a well rounded dev in your team.
        I genuienly enjoy learning and applying my knowldege to challenges given to me and 
        I hope I can add this skill to your team and grow with the company.    
        </p>
        
      </div>


      </div>
  )
}
