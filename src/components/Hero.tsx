import heroImg from "../assets/pexels-photo-1639562.webp";

const Hero = (): JSX.Element => {
   return (
      <section className="mx-auto p-4 w-full max-w-2xl-extend">
         <div className="max-h-[31.25rem] relative">
            <div className="w-full absolute h-full text-gray-200 max-h-[31.25rem] bg-black/40 flex flex-col justify-center">
               <h1 className="hero--heading">
                  The <span className="text-orange-500">Best</span>
               </h1>
               <h1 className="hero--heading">
                  <span className="text-orange-500">Foods</span> Delivered
               </h1>
            </div>
            <img src={heroImg} alt="" className="w-full max-h-[31.25rem] object-cover" />
         </div>
      </section>
   );
};

export default Hero;
