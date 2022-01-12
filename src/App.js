import { useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState({});
  console.log(useState());

  const handleFetch = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random", {
      method: "GET",
    });
    const data = await response.json();
    setData(data);
  };

  return (
    <div className="App">
      <h1>hi there</h1>
      <p>{data.value ? data.value : "click the button to get your quote"}</p>
      <button onClick={handleFetch}>Click me</button>
    </div>
  );
};

export default App;
