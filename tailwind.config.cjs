/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      banner:
        "url('https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')",
    },
    extend: {
      colors: {
        rocketseat: "#8257e6",
      },
      padding: {
        btn: '6px 7px'
      }
    },
  },
  plugins: [],
};
