import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
    <Fragment>
    <header className={classes.header}>
        <h1>React Meals</h1>
        {/* <button>Cart</button> */}
        {/* passing the function call from Cart in App.js to headerCartButton.js */}
        <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food"></img>
    </div>
    </Fragment>
    );
};

export default Header;