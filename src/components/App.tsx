import Categories from "./Categories";
import Header from "./Header";
import Sort from "./Sort";

import "../scss/App.scss";
import PizzaItem from "./PizzaItem";
import { useState } from "react";

const App: React.FC = () => {
   const [theme, setTheme] = useState("theme-light");

   return (
      <div className={`wrapper ${theme}`}>
         <Header />
         <main className="content">
            <div className="container">
               <div className="content-top">
                  <Categories />
                  {/* <Sort /> */}
               </div>
               <h2 className="content-title">Заголовок в main Все пиццы</h2>
               <div className="content-items">
                  <PizzaItem
                     name="попидори"
                     pizzaProps={{ dough: "qwe", size: "qwe" }}
                     price={350}
                     image=""
                  />
               </div>
            </div>
         </main>
         <footer></footer>
      </div>
   );
};

export default App;
