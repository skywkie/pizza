interface IPizzaItem {
   name: string;
   pizzaProps: { dough: string; size: string };
   price: number;
   image?: string;
}

const PizzaItem = ({ name, pizzaProps, price, image }: IPizzaItem) => {
   return <section>Пицца: {name}</section>;
};
export default PizzaItem;
