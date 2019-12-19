import React, { Component, Fragment } from "react"
import classes from "./Navigation.module.css"
import logo from "../../assets/images/meetup-logo.svg"

class Navigation extends Component {
  render() {
    return (
      <nav className={classes.Navigation}>
        <div>
          <img className={classes.logo} src={logo} alt='Meeetup Home' />
        </div>
        <div className={classes.menu}>
          <div className={[classes.link, classes.Startgroup].join(" ")}>
            Start a new group
          </div>
          <div className={classes.userAuthenticate}>
            <div className={classes.link}>Log In</div>
            <div className={classes.link}>Sign Up</div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
