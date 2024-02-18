import "../scss/Categories.scss";

const Categories = () => {
   return (
      <section className="categories align-center">
         <div className="category-item">
            <span className="title-item">All</span>
         </div>
         <div className="category-item">
            <span className="title-item">Meat</span>
         </div>
         <div className="category-item">
            <span className="title-item">Vegeterian</span>
         </div>
         <div className="category-item">
            <span className="title-item">Grill</span>
         </div>
         <div className="category-item">
            <span className="title-item">Spicy</span>
         </div>
         <div className="category-item">
            <span className="title-item">Closed</span>
         </div>
      </section>
   );
};
export default Categories;
