import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    // <div>
    //   <h2>Let's get started!</h2>
    // </div>

    // <Fragment>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart= {showCartHandler} />
        {/* <Cart /> */}
        <main>
          <Meals />
        </main>
      </CartProvider>
    // </Fragment>
  );
}

export default App;
