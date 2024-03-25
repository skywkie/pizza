import React from "react";
import "../scss/Categories.scss";

const categories = ["All", "Meat", "Vegeteriran", "Grill", "Spicy", "Closed"];

const Categories = ({ categoryId, onChangeCategory }: any) => {
   console.log("categories render");

   return (
      <section className="categories">
         <ul>
            {categories.map((name, index) => (
               <li
                  key={index}
                  onClick={() => onChangeCategory(index)}
                  className={categoryId === index ? "active" : ""}
               >
                  {name}
               </li>
            ))}
         </ul>
      </section>
   );
};
export default Categories;
