import React from "react"
import ThirdImg from "../../../../assets/images/third.en.png"
import classes from "./Third.module.css"

const Third = () => {
  return (
    <div className={classes.Third}>
      <div className={classes.thirdText}>
        <div>connect</div>
        <div>Make real connection</div>
        <div>
          meet people who love what you love, and stay in touch after the vent
        </div>
      </div>
      <img className={classes.thirdImg} src={ThirdImg} />
    </div>
  )
}

export default Third
