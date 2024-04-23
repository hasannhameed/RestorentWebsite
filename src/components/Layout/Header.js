import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from '../../assets/R.jpg'


const Header = props => {

    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button className={classes.button}>Your Card  <button className={classes.inbutton}>0</button></button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="Food" />
        </div>
    </Fragment>

};

export default Header;