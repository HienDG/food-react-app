import image from "../assets/photo-1613769049987-b31b641f25b1.avif";
import image_1 from "../assets/photo-1544025162-d76694265947.avif";
import image_2 from "../assets/photo-1559715745-e1b33a271c8f.avif";

interface TCards {
   title: string;
   subTitle: string;
   image: string;
}

const cards: TCards[] = [
   {
      title: "Sun's Out, BOGO's Out",
      subTitle: "Through 28/6",
      image,
   },
   {
      title: "New Restaurants",
      subTitle: "Added Daily",
      image: image_1,
   },
   {
      title: "We Deliver Desserts Too",
      subTitle: "Tasty Treats",
      image: image_2,
   },
];

const HeadLineCards = (): JSX.Element => {
   return (
      <section className="mx-auto max-w-2xl-extend p-4 py-12 grid md:grid-cols-3 gap-6">
         {cards.map((card) => (
            <div className="relative rounded-xl" key={card.title}>
               <div className="w-full h-full bg-black/50 absolute rounded-xl text-white">
                  <p className="font-bold text-2xl px-2 pt-4">{card.title}</p>
                  <p className="px-2">{card.subTitle}</p>
                  <button className="border-white bg-white text-black mx-2 absolute bottom-4">
                     Order Now
                  </button>
               </div>
               <img
                  src={card.image}
                  className="max-h-[10rem] md:max-h-[12.5rem] w-full object-cover rounded-xl"
                  alt="/"
               />
            </div>
         ))}
      </section>
   );
};

export default HeadLineCards;
