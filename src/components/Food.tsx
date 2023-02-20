import { useCallback, useState, Dispatch } from "react";

import Filter from "./Filter";

import { FOOD, CATEGORIES } from "../data";

const type: string[] = ["Burger", "Pizza", "Salad", "Chicken"];
const price: string[] = ["$", "$$", "$$$", "$$$$"];

const Food = () => {
   const [foods, setFoods] = useState<TFood[]>(FOOD);

   const filterCategory = useCallback(
      (category: string) => {
         setFoods(() => FOOD.filter((item) => item.category === category.toLowerCase()));
      },
      [foods]
   );

   const filterPrice = useCallback(
      (price: string) => {
         setFoods(() => FOOD.filter((item) => item.price === price));
      },
      [foods]
   );

   return (
      <main className="m-auto max-w-2xl-extend px-4 py-12">
         <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rate Menu Items</h1>
         <section className="flex flex-col lg:flex-grow  justify-between">
            <Filter title="Filter Type" data={type} filter={filterCategory}>
               <button
                  onClick={() => setFoods(FOOD)}
                  className="m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
               >
                  All
               </button>
            </Filter>
            <Filter title="Filter Price" data={price} filter={filterPrice} />
         </section>
         <section className="grid grid-cols-2 gap-6 pt-4 lg:grid-cols-4">
            {foods.map((item) => (
               <div
                  key={item.name}
                  className="duration-300 border rounded-lg shadow-lg hover:scale-105"
               >
                  <img
                     src={item.image}
                     alt={item.name}
                     className="w-full h-[200px] object-cover rounded-t-lg"
                  />
                  <div className="flex justify-between px-2 py-4">
                     <p className="font-bold">{item.name}</p>
                     <p>
                        <span className="p-1 text-white bg-orange-500 rounded-full">
                           {item.price}
                        </span>
                     </p>
                  </div>
               </div>
            ))}
         </section>
      </main>
   );
};
export default Food;
