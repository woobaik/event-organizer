import React from "react"
import FirstImg from "../../../../assets/images/first.en.png"
import classes from "./First.module.css"

const First = () => {
  return (
    <div className={classes.First}>
      <section className={classes.textArea}>
        <h1 className={classes.header}>Stay Connected</h1>
        <p>
          Use the Meetup app to find upcoming events and stay connected to your
          community.
        </p>
      </section>
      <section>
        <img className={classes.firstImg} src={FirstImg} />
      </section>
    </div>
  )
}

export default First
