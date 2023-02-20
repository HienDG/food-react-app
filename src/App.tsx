import { Fragment } from "react";

import { Navbar, Hero, HeadLineCards, Food, Category } from "./components";

const App = (): JSX.Element => {
   return (
      <Fragment>
         <Navbar />
         <Hero />
         <HeadLineCards />
         <Food />
         <Category />
      </Fragment>
   );
};

export default App;
