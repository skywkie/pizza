import React from "react";
import "../scss/PizzaItem.scss";

interface IPizzaItem {
   name: string;
   types: number[];
   sizes: number[];
   price?: number;
   image?: string;
}

const PizzaItem = ({ name, types, sizes, price, image }: IPizzaItem) => {
   console.log("pizzaItem render");
   const pizzaTypes = ["тонкое", "традиционное"];

   const [activeType, setActiveType] = React.useState<number>();
   const [activeSize, setActiveSize] = React.useState<number>();

   return (
      <section className="pizza align-center">
         <img alt="pizza" src={image} />
         <h2>{name}</h2>
         <div className="pizza-selector">
            <ul className="align-center">
               {types.map((typeId) => (
                  <li
                     onClick={() => setActiveType(typeId)}
                     key={typeId}
                     className={activeType === typeId ? "active" : ""}
                  >
                     {pizzaTypes[typeId]}
                  </li>
               ))}
            </ul>
            <ul className="align-center">
               {sizes.map((size, index) => (
                  <li
                     onClick={() => setActiveSize(index)}
                     key={index}
                     className={activeSize === index ? "active" : ""}
                  >
                     {size} cm
                  </li>
               ))}
            </ul>
         </div>
         <div className="pizza-botttom">
            <h4>price: {price}$</h4>
            <button className="align-center">
               <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                     fill="white"
                  ></path>
               </svg>
               <span>
                  add to cart <i>{0}</i>
               </span>
            </button>
         </div>
      </section>
   );
};
export default PizzaItem;
