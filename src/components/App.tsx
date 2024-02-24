import React from "react";
import Categories from "./Categories";
import Header from "./Header";
import Sort from "./Sort";

import "../scss/App.scss";
import PizzaItem from "./PizzaItem";
import pizzas from "../assets/pizzas.json";

const App: React.FC = () => {
   console.log("app render");

   return (
      <div className={`wrapper light-theme`}>
         <Header />
         <main className="content">
            <div className="container">
               <div className="content-top">
                  <Categories />
                  <Sort />
               </div>
               <h2 className="content-title">Все пиццы</h2>
               <div className="content-items">
                  {pizzas.map((object) => (
                     <PizzaItem
                        name={object.title}
                        types={object.types}
                        sizes={object.sizes}
                        price={object.price}
                        image={object.imageUrl}
                        key={object.id}
                        // {...object} - только, если совпадают названия параметров с названиями св-в объекта (spread-оператор)
                     />
                  ))}
               </div>
            </div>
         </main>
         <footer></footer>
      </div>
   );
};

export default App;
