import React from "react";
import images from "../images";
import { HiOutlineShoppingBag } from "react-icons/hi";

function Product() {
  const data = [
    {
      id: 1,
      name: "Green Apple",
      image: images.greenApple,
      price: 20.99, // Regular price
      discountedPrice: 14.99, // Discounted price
      rating: 4,
    },
    {
      id: 2,
      name: "Fresh Indian Malta",
      image: images.malta,
      price: "20.00",
      discountedPrice: null,
      rating: 4,
    },
    {
      id: 3,
      name: "Chinese cabbage",
      image: images.cabbage,
      price: "12.00",
      discountedPrice: null,
      rating: 4,
    },
    {
      id: 4,
      name: "Green Lettuce",
      image: images.lettuce,
      price: "9.00",
      discountedPrice: null,
      rating: 4,
    },
    {
      id: 5,
      name: "Eggplant",
      image: images.eggplant,
      price: "34.00",
      discountedPrice: null,
      rating: 4,
    },
    {
      id: 6,
      name: "Big Potatoes",
      image: images.potato,
      price: "20.00",
      discountedPrice: null,
      rating: 4,
    },
    {
      id: 7,
      name: "Corn",
      image: images.corn,
      price: "20.00",
      discountedPrice: null,
      rating: 4,
    },
    {
      id: 8,
      name: "Fresh Cauliflower",
      image: images.cauliflower,
      price: "12.00",
      discountedPrice: null,
      rating: 4,
    },
    {
      id: 9,
      name: "Green Capsicum",
      image: images.capsicum,
      price: "9.00",
      discountedPrice: null,
      rating: 4,
    },
    {
      id: 10,
      name: "Green Chili",
      image: images.chili,
      price: "34.00",
      discountedPrice: null,
      rating: 4,
    },
  ];

  return (
    <div className="topDiv grid grid-cols-5">
      {data.map((product) => (
        <div key={product.id} className="border-[1px] border-gray-200">
          <img className="" src={product.image} alt={product.name} />
          <div className="productDetails p-3 ">
            <div className="bichhako relative flex">
              <div className="price gap-3">
                <p>{product.name}</p>
                {product.discountedPrice !== null && (
                  <>
                    <span className="mr-1">${product.discountedPrice}</span>
                    <span className="line-through text-gray-300">
                      ${product.price}
                    </span>
                  </>
                )}
                {product.discountedPrice === null && (
                  <span>${product.price}</span>
                )}
              </div>
              <div className="absolute right-1 bottom-0 w-10 h-10 bg-gray-500 flex justify-center items-center rounded-full">
                <HiOutlineShoppingBag className="w-5 h-5" />
              </div>
            </div>
            <div className="ratings mt-1 flex ">
              {[...Array(product.rating)].map((_, index) => (
                <img key={index} src={images.Star} alt="Star" />
              ))}
              {[...Array(5 - product.rating)].map((_, index) => (
                <img key={index} src={images.StarBlank} alt="Blank Star" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
