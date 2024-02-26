import React from "react";
import Categories from "./Categories";
import Header from "./Header";
import Sort from "./Sort";
import "../scss/App.scss";
import PizzaItem from "./PizzaItem";

type items = {
   id: number;
   imageUrl: string;
   title: string;
   types: number[];
   sizes: number[];
   price: number;
   category: number;
   rating: number;
};

const App: React.FC = () => {
   console.log("app render");
   const [items, setItems] = React.useState<items[]>([]);

   async function getItems() {
      await fetch("https://65db33493ea883a152914d94.mockapi.io/items")
         .then((response) => {
            return response.json();
         })
         .then((arr: []) => {
            setItems(arr);
            console.log(arr);
         })
         .catch((err) => {
            console.log(err);
         });
   }
   React.useEffect(() => {
      getItems();
   }, []);

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
                  {items.map((obj) => (
                     <PizzaItem
                        name={obj.title}
                        types={obj.types}
                        sizes={obj.sizes}
                        price={obj.price}
                        image={obj.imageUrl}
                        key={obj.id}
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
