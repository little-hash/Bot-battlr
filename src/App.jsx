import { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";


function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/http://bots-si0g.onrender.com/bots')
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const deleteBot = (bot) => {
    fetch(`https://cors-anywhere.herokuapp.com/http://bots-si0g.onrender.com/bots/${bot.id}`, { method: "DELETE" })
      .then(() => {
        setBots(bots.filter((b) => b.id !== bot.id));
        setArmy(army.filter((b) => b.id !== bot.id));
      });
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} deleteBot={deleteBot}/>
      <BotCollection bots={bots} addToArmy={addToArmy} deleteBot={deleteBot} />
    </div>
  );
}

export default App;
