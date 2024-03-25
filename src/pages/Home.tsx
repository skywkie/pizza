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
   const [categoryId, setCategoryId] = React.useState(0);
   const [sortType, setSortType] = React.useState({
      name: "популярности",
      sortProperty: "rating",
   });

   React.useEffect(() => {
      const category = categoryId > 0 ? `category=${categoryId}` : "";
      const sortBy = sortType.sortProperty.replace("-", "");
      const order = sortType.sortProperty.includes("-") ? "asc" : "desc";

      fetch(
         `https://65db33493ea883a152914d94.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
      )
         .then((response) => {
            return response.json();
         })
         .then((arr: []) => {
            setItems(arr);
         })
         .catch((err) => {
            console.log(err);
         });
      window.scrollTo(0, 0);
   }, [categoryId, sortType]);

   return (
      <>
         <div className="content-top">
            <Categories
               categoryId={categoryId}
               onChangeCategory={(index: any) => setCategoryId(index)}
            />
            <Sort sortType={sortType} onChangeSort={(i: any) => setSortType(i)} />
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
