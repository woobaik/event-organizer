import React from "react"
import SecondImg from "../../../../assets/images/second.en.png"
import classes from "./Second.module.css"

const Second = () => {
  return (
    <div className={classes.Second}>
      <section>
        <img className={classes.secondImg} src={SecondImg} />
      </section>
      <section className={classes.textArea}>
        <h4>DISCOVER</h4>
        <h1 className={classes.header}>Find what inspires you</h1>
        <p>Find groups in your area that are doing things that interest you</p>
      </section>
    </div>
  )
}

export default Second
