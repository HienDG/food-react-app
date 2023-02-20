export {};
declare global {
   interface TFood {
      id: number;
      name: string;
      category: string;
      image: string;
      price: string;
   }
   interface TCategory {
      id: number;
      name: string;
      image: string;
   }
}
