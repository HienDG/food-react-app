import { PropsWithChildren, Fragment } from "react";

interface TFilter {
   title: string;
   data: string[];
   filter: (value: string) => void;
   children?: JSX.Element;
}

const Filter: React.FC<TFilter> = ({ title, data, filter, children }): JSX.Element => {
   return (
      <div>
         <p className="font-bold text-gray-700">{title}</p>
         <div className="flex justify-between flex-wrap">
            <Fragment>{children ?? null}</Fragment>
            <Fragment>
               {data.map((d) => (
                  <button
                     key={d}
                     className="m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white"
                     onClick={filter.bind(null, d)}
                  >
                     {d}
                  </button>
               ))}
            </Fragment>
         </div>
      </div>
   );
};
export default Filter;
