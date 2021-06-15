import React,{useState} from "react";


//1
let time = new Date().toLocaleTimeString();

function App() {
  //4- Pour afficher le temps chaque seconde, il suffit d'appeler la fonction dans le setInterval
  setInterval(clickToRefresh, 1000);

  //2
  let [myTime,refresh]=useState(time);

  //3 Pour le clique
  function clickToRefresh() {
    //Recreer une nouvelle heure. l'ancienne = au nouveau
    let newTime= new Date().toLocaleTimeString();
    refresh(myTime=newTime);
    
  }
  return (
    <div className="container">
      <h1>{myTime}</h1>
      <button onClick={clickToRefresh}>Get Time</button>
    </div>
  );
}

export default App;
