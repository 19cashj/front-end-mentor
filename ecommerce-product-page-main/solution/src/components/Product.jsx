import { useState } from "react";
import { addCartItem } from "../cartStore";

const Product = (props) => {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [lightboxActive, setLightboxActive] = useState(0);
  const toggleLightbox = () => {
    setLightboxActive((current) => !current);
  };
  const imageSrc = [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg",
  ];
  const productInfo = {
    id: "fall-shoe",
    name: "Fall Limited Edition Sneakers",
    imageSrc: "/image-product-1-thumbnail.jpg",
    quantity: quantity,
    price: 125,
  };
  const nextImage = () => {
    if (activeImage >= 0 || activeImage <= 2) {
      setActiveImage((prev) => (prev += 1));
    }
    if (activeImage == 3) {
      setActiveImage(0);
    }
  };
  const previousImage = () => {
    if (activeImage >= 1 || activeImage <= 3) {
      setActiveImage((prev) => (prev -= 1));
    }
    if (activeImage == 0) {
      setActiveImage(3);
    }
  };
  const quantityAdd = () => {
    if (quantity >= 0) {
      setQuantity((prev) => (prev += 1));
    }
  };
  const quantityDelete = () => {
    if (quantity >= 1) {
      setQuantity((prev) => (prev -= 1));
    }
  };
  const addToCart = () => {
    if (quantity >= 1) {
      addCartItem(productInfo);
      setQuantity(0);
    }
  };
  return (
    <article className="flex lg:flex-row sm:flex-col lg:my-20 sm:mb-20 lg:mx-20 lg:gap-28 sm:gap-8 justify-center">
      <div className="lg:w-1/2 sm:w-full flex flex-col gap-8 lg:max-w-md">
        <button className="sm:hidden lg:block" onClick={toggleLightbox}>
          <img className="lg:rounded-xl" src={imageSrc[activeImage]} />
        </button>
        <div className="lg:hidden sm:block relative">
          <img className="" src={imageSrc[activeImage]} />
          <button
            className="bg-white rounded-full absolute z-10 left-4 top-1/2"
            onClick={() => previousImage()}
          >
            <img className="px-4 py-3.5" src="/icon-previous.svg" />
          </button>
          <button
            className="bg-white rounded-full absolute z-10 right-4 top-1/2"
            onClick={() => nextImage()}
          >
            <img className="px-4 py-3.5" src="/icon-next.svg" />
          </button>
        </div>
        <div className="flex-row gap-8 lg:flex sm:hidden">
          <button
            onClick={() => setActiveImage(0)}
            className={
              activeImage == 0 ? "outline-orange outline rounded-xl" : null
            }
          >
            <img
              className={
                "rounded-xl hover:opacity-50 " +
                (activeImage == 0 ? "opacity-30" : null)
              }
              src="/image-product-1-thumbnail.jpg"
            />
          </button>
          <button
            onClick={() => setActiveImage(1)}
            className={
              activeImage == 1 ? "outline-orange outline rounded-xl" : null
            }
          >
            <img
              className={
                "rounded-xl hover:opacity-50 " +
                (activeImage == 1 ? "opacity-30" : null)
              }
              src="/image-product-2-thumbnail.jpg"
            />
          </button>
          <button
            onClick={() => setActiveImage(2)}
            className={
              activeImage == 2 ? "outline-orange outline rounded-xl" : null
            }
          >
            <img
              className={
                "rounded-xl hover:opacity-50 " +
                (activeImage == 2 ? "opacity-30" : null)
              }
              src="/image-product-3-thumbnail.jpg"
            />
          </button>
          <button
            onClick={() => setActiveImage(3)}
            className={
              activeImage == 3 ? "outline-orange outline rounded-xl" : null
            }
          >
            <img
              className={
                "rounded-xl hover:opacity-50 " +
                (activeImage == 3 ? "opacity-30" : null)
              }
              src="/image-product-4-thumbnail.jpg"
            />
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 lg:max-w-md flex flex-col justify-center sm:mx-10">
        <h4 className="text-orange font-bold text-xs">SNEAKER COMPANY</h4>
        <h1 className="font-extrabold text-4xl mt-5">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-dark-gray-blue mt-8">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="mt-5 flex lg:flex-col sm:flex-row sm:justify-between">
          <div className="flex flex-row items-center gap-3">
            <span className="font-bold text-2xl">$125.00</span>
            <div className="bg-pale-orange px-2 rounded-md">
              <span className="font-bold text-sm text-orange">50%</span>
            </div>
          </div>
          <p className="text-gray-blue font-bold line-through mt-1">$250.00</p>
        </div>
        <div className="flex lg:flex-row gap-4 mt-8 w-full sm:flex-col">
          <div className="bg-light-gray-blue flex flex-row items-center justify-between rounded-lg lg:w-1/3 sm:w-full">
            <button
              onClick={() => quantityDelete()}
              className="p-4 shrink-0 hover:opacity-50"
            >
              <img className="w-full h-full" src="/icon-minus.svg" />
            </button>
            <p className="font-bold">{quantity}</p>
            <button
              onClick={() => quantityAdd()}
              className="p-4 shrink-0 hover:opacity-50"
            >
              <img src="/icon-plus.svg" />
            </button>
          </div>
          <button
            onClick={() => addToCart()}
            className="bg-orange flex flex-row justify-center items-center gap-4 py-4 lg:w-3/4 sm:w-full rounded-lg shadow-box-orange hover:opacity-50"
          >
            <img src="/icon-cart.svg" className="invert brightness-0" />
            <p className="text-white font-bold whitespace-nowrap">
              Add to cart
            </p>
          </button>
        </div>
      </div>
      {lightboxActive ? (
        <div className="sm:hidden lg:flex flex-row justify-center items-center top-0 left-0 fixed w-screen h-full">
          <div className="w-1/2 h-full z-50 flex flex-col justify-center items-center max-w-lg">
            <button
              className={"p-5 self-end translate-x-6 [&>svg]:hover:fill-orange"}
              onClick={toggleLightbox}
            >
              <svg
                className="fill-white"
                width="14"
                height="15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            <div className="relative max-w-lg">
              <img className="rounded-xl" src={imageSrc[activeImage]} />
              <button
                className="bg-white px-4 py-3.5 rounded-full absolute z-10 -left-6 top-1/2 [&>svg]:hover:stroke-orange"
                onClick={() => previousImage()}
              >
                <svg
                  className="stroke-dark-blue"
                  width="13"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1 3 9l8 8"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
              <button
                className="bg-white px-4 py-3.5 rounded-full absolute z-10 -right-6 top-1/2 [&>svg]:hover:stroke-orange m-auto text-center"
                onClick={() => nextImage()}
              >
                <svg
                  className="stroke-dark-blue text-center"
                  width="13"
                  height="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m2 1 8 8-8 8"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-row gap-8 m-8 max-w-lg">
              <button
                className={
                  "bg-white rounded-xl " +
                  (activeImage == 0 ? "outline-orange outline" : null)
                }
                onClick={() => setActiveImage(0)}
              >
                <img
                  className={
                    "rounded-xl hover:opacity-40 " +
                    (activeImage == 0 ? "opacity-30" : null)
                  }
                  src="/image-product-1-thumbnail.jpg"
                />
              </button>
              <button
                className={
                  "bg-white rounded-xl " +
                  (activeImage == 1 ? "outline-orange outline" : null)
                }
                onClick={() => setActiveImage(1)}
              >
                <img
                  className={
                    "rounded-xl hover:opacity-40 " +
                    (activeImage == 1 ? "opacity-30" : null)
                  }
                  src="/image-product-2-thumbnail.jpg"
                />
              </button>
              <button
                className={
                  "bg-white rounded-xl " +
                  (activeImage == 2 ? "outline-orange outline" : null)
                }
                onClick={() => setActiveImage(2)}
              >
                <img
                  className={
                    "rounded-xl hover:opacity-40 " +
                    (activeImage == 2 ? "opacity-30" : null)
                  }
                  src="/image-product-3-thumbnail.jpg"
                />
              </button>
              <button
                className={
                  "bg-white rounded-xl " +
                  (activeImage == 3 ? "outline-orange outline" : null)
                }
                onClick={() => setActiveImage(3)}
              >
                <img
                  className={
                    "rounded-xl hover:opacity-40 " +
                    (activeImage == 3 ? "opacity-30" : null)
                  }
                  src="/image-product-4-thumbnail.jpg"
                />
              </button>
            </div>
          </div>
          <div className="fixed top-0 left-0 bg-black opacity-60 z-40 w-screen h-full" />
        </div>
      ) : null}
    </article>
  );
};

export default Product;
