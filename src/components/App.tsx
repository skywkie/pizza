import React from "react";
import Header from "./Header";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../scss/App.scss";
import { Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";

const App: React.FC = () => {
   console.log("app render");

   return (
      <div className={`wrapper light-theme`}>
         <Header />
         <main className="content">
            <div className="container">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<NotFound />} />{" "}
                  {/* * - если ни один route не подошел */}
               </Routes>
            </div>
         </main>
         <footer></footer>
      </div>
   );
};

export default App;
