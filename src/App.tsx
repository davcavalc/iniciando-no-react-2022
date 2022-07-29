import { useState } from "react";
import { AppRoutes } from "./Routes";
import Navbar from "./Componentes/Navbar";
import { Tuite } from "./Componentes/Tuite";

function App() {

  // Declarando um estado com useState()
  // const [tweets, setTweets] = useState<string[]>([
  //   'Tweet 1',
  //   'Tweet 2',
  //   'Tweet 3',
  //   'Tweet 4',
  //   'Tweet 5',
  // ])

  // function createTweet() {
  //   setTweets([...tweets, 'Tweet 5']);
  // }

  return (
    <AppRoutes />
    // <>
    //   <div className="flex justify-center">
    //     <h1 className="text-5xl italic text-black hover:text-lime-600 uppercase">
    //       Hello World!!
    //     </h1>
    //   </div>

    //   {tweets.map(tweet => {
    //     return <Tuite text={tweet} />
    //   })}

    //   <div className="flex justify-center mt-6 border-4 border-rocketseat rounded-md bg-rocketseat mx-[40em] btn h-14">
    //     <button className="font-bold capitalize text-4xl bg-rocketseat text-white" onClick={createTweet}>Adicionar tweet</button>
    //   </div>

    //   <Navbar />
    // </>
  );
}

export default App;
