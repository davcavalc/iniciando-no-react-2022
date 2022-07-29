import Navbar from "./Componentes/Navbar";

function App() {
  return (
    <>
      <div className="flex justify-center bg-black hover:bg-amber-700">
        <h1 className="text-5xl italic text-white hover:text-lime-600 uppercase">
          Hello World!!
        </h1>
      </div>
      <Navbar />
    </>
  );
}

export default App;
