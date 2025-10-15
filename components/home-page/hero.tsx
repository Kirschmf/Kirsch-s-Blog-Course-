import Image from "next/image"
import classes from "./hero.module.css"

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/kirsch.jpeg" alt="An image showing Max" width={300} height={300} />
      </div>
      <h1>Hi, I'm Kirsch</h1>
      <p>I will be blogging about web development - especially about frontend like Typescript and React.</p>
    </section>
  )
}

export default Hero
