import React from "react"
import classes from "./Fourth.module.css"
import fourthImg from "../../../../assets/images/fourth.en.png"

const Fourth = () => {
  return (
    <div className={classes.Fourth}>
      <img className={classes.fourthImg} src={fourthImg} />
      <div className={classes.fourthText}>
        <div>CREATE</div>
        <div>Plan Events on the fly</div>
        <div>
          Manage your Meetup group and plan your next event—all from your phone.
        </div>
      </div>
    </div>
  )
}

export default Fourth
