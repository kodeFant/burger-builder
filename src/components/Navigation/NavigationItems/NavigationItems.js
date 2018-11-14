import React from "react";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Burgerbyggern
    </NavigationItem>
    {props.isAuthenticated ? <NavigationItem link="/orders">Bestillinger</NavigationItem> : null}
    {!props.isAuthenticated
      ? <NavigationItem link="/auth">Kundeinnlogg</NavigationItem>
      : <NavigationItem link="/logout">Logg ut</NavigationItem>}
  </ul>
);

export default navigationItems;
