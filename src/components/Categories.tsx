import React from "react";
import "../scss/Categories.scss";

const categories = ["All", "Meat", "Vegeteriran", "Grill", "Spicy", "Closed"];

const Categories = () => {
   console.log("categories render");
   const [activeIndex, setActiveIndex] = React.useState(0);

   const handleClickCategory = (index: number) => {
      setActiveIndex(index);
   };

   return (
      <section className="categories">
         <ul>
            {categories.map((name, index) => (
               <li
                  key={index}
                  onClick={() => handleClickCategory(index)}
                  className={activeIndex === index ? "active" : ""}
               >
                  {name}
               </li>
            ))}
         </ul>
      </section>
   );
};
export default Categories;
