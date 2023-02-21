import { useState, useEffect } from "react";
import { useStore } from "@nanostores/react";
import { cartItems, cartQuantity, deleteCartItem } from "../cartStore";

const Nav = (props) => {
  const [menuOpen, setMenuOpen] = useState(0);
  const [cartOpen, setCartOpen] = useState(0);
  const $cartItems = useStore(cartItems);
  const $cartQuantity = useStore(cartQuantity);
  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };
  const toggleCart = () => {
    setCartOpen((current) => !current);
  };

  return (
    <nav className="flex justify-between items-center border-b border-b-gray-blue lg:h-21 sm:h-15 z-50">
      <div className="flex justify-center items-center h-full">
        <button className="lg:hidden py-6 pl-6 pr-4 mt-2" onClick={toggleMenu}>
          <img src="/icon-menu.svg" />
        </button>
        <div className="sm:p-0 lg:px-10 lg:mb-1">
          <h3 className="text-3xl font-bold">sneakers</h3>
        </div>
        <ul className="sm:hidden lg:contents text-dark-gray-blue flex justify-center items-center [&>a]:p-5 [&>a]:py-14 [&>a]:h-full [&>*]:cursor-pointer hover:border-b-orange hover:border-b-4">
          <a href="" className="hover:shadow-inner-bar hover:text-dark-blue">
            Collections
          </a>
          <a href="" className="hover:shadow-inner-bar hover:text-dark-blue">
            Men
          </a>
          <a href="" className="hover:shadow-inner-bar hover:text-dark-blue">
            Women
          </a>
          <a href="" className="hover:shadow-inner-bar hover:text-dark-blue">
            About
          </a>
          <a href="" className="hover:shadow-inner-bar hover:text-dark-blue">
            Contact
          </a>
        </ul>
      </div>
      <div className="flex items-center justify-center mr-8 lg:b-4">
        <button
          className="p-8 lg:mr-4 sm:mr-0 [&>img]:hover:brightness-0 relative"
          onClick={toggleCart}
        >
          <img
            src="/icon-cart.svg"
            className={cartOpen ? "brightness-0" : "brightness-80"}
          />
          {$cartQuantity > 0 ? (
            <div className="text-white text-xs bg-orange absolute top-6 right-5 px-2 rounded-full">
              {$cartQuantity}
            </div>
          ) : null}
        </button>
        <button className="sm:w-8 lg:w-12 p-0.5 rounded-full hover:shadow-inner-circle">
          <img src="/image-avatar.png" />
        </button>
      </div>
      {menuOpen ? (
        <>
          <div className="fixed flex flex-col z-50 bg-white h-screen top-0 left-0 w-2/3">
            <button className="mb-6 p-4 mt-5" onClick={toggleMenu}>
              <img src="/icon-close.svg" />
            </button>
            <ul className="flex flex-col text-base font-extrabold [&>*]:p-4 [&>*]:hover:cursor-pointer">
              <a href="">Collections</a>
              <a href="">Men</a>
              <a href="">Women</a>
              <a href="">About</a>
              <a href="">Contact</a>
            </ul>
          </div>
          <div className="fixed top-0 left-0 bg-black opacity-60 z-40 w-screen h-full"></div>
        </>
      ) : null}
      {cartOpen ? (
        <div className="w-96 flex flex-col absolute top-24 right-0 lg:left-auto sm:left-0 sm:ml-auto sm:mr-auto sm:text-center z-30 bg-white shadow-lg rounded-lg">
          <h4 className="font-bold border-b border-b-gray-blue p-5 text-left">
            Cart
          </h4>
          {Object.values($cartItems).length ? (
            <ul className="">
              {Object.values($cartItems).map((cartItem) => (
                <li className="flex flex-row justify-center">
                  <img
                    className="w-12 h-12 mx-4 mt-8 rounded-lg"
                    src={cartItem.imageSrc}
                    alt={cartItem.name}
                  />
                  <div className="text-left mt-8 mb-4">
                    <p className="text-dark-gray-blue">{cartItem.name}</p>
                    <span className="text-dark-gray-blue">
                      ${cartItem.price}.00 x {cartItem.quantity}
                    </span>
                    <span className="font-bold">
                      {" $"}
                      {cartItem.totalPrice}.00
                    </span>
                  </div>
                  <button
                    onClick={() => deleteCartItem(cartItem)}
                    className="p-4"
                  >
                    <img src="/icon-delete.svg" />
                  </button>
                </li>
              ))}
              <button className="bg-orange py-4 px-8 w-4/5 rounded-lg mt-4 mb-8">
                <p className="text-white font-bold">Checkout</p>
              </button>
            </ul>
          ) : (
            <p className="font-bold text-dark-gray-blue py-20 px-24">
              Your cart is empty.
            </p>
          )}
        </div>
      ) : null}
    </nav>
  );
};

export default Nav;
