import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaItem from "../components/PizzaItem";

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

const Home = () => {
   const [items, setItems] = React.useState<items[]>([]);

   function getItems() {
      fetch("https://65db33493ea883a152914d94.mockapi.io/items")
         .then((response) => {
            return response.json();
         })
         .then((arr: []) => {
            setItems(arr);
         })
         .catch((err) => {
            console.log(err);
         });
   }

   React.useEffect(() => {
      getItems();
   }, []);

   return (
      <>
         <div className="content-top">
            <Categories />
            <Sort />
         </div>
         <h2 className="content-title">All pizzas</h2>
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
      </>
   );
};

export default Home;
