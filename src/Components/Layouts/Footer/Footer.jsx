import React from "react"
import classes from "./Footer.module.css"
import FooterNavigation from "./FooterNavigation/FooterNavigation.jsx"
import FooterLicense from "./FooterLicense/FooterLicense.jsx"

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <FooterNavigation />
      <FooterLicense />
    </footer>
  )
}

export default Footer
