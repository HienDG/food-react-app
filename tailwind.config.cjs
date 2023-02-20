/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         width: {
            "xl-extend": "102.5rem",
         },
         maxWidth: {
            "2xl-extend": "102.5rem",
         },
      },
   },
   plugins: [require("prettier-plugin-tailwindcss")],
};
