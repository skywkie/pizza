import React from "react";

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

export const useFetch = (url: string) => {
   const [items, setItems] = React.useState<items[]>([]);

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
   return items;
};
