import React from "react";
import { Store } from "../../store";
import "./Navbar.style.css";
const NavbarShop = () => {
  const {
    state: { cart },
    dispatch,
  } = React.useContext(Store);
  const [showCart, setShowCart] = React.useState(false);

  const handleRemoveCart = (id) => {
    console.log(id);
    dispatch({ type: "removeCart", payload: {id:id} });
  };
  return (
    <div className="navbar">
      <div>Shop</div>
      <div> 
        <ul className="ul">
          <li className={"li"}>About</li>
          <li className={"li"}>Transparency</li>
          <li className={"li"}>Cases</li>
          <li className={"li"}>About</li>
          <li className={"li"}>About</li>
        </ul>
      </div>
      <div className="cartIcon" onClick={() => setShowCart(!showCart)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          fill="currentColor"
          class="bi bi-cart-fill"
          viewBox="0 0 16 16"
          style={{ cursor: "pointer" }}
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>

        <p className="count">{cart.length}</p>
      </div>
      {showCart ? (
        <div className="carts">
          <h2>My Shopping Cart</h2>
          {cart.map((item, index) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "1rem",
              }}
            >
              <p>{item.title}</p>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => handleRemoveCart(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path
                    fill-rule="evenodd"
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default NavbarShop;
