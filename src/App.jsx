import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DateCounter from "./DateCounter";
import Header from "./components/Header";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <main className="main">
        <p>1/15</p>
        <p>Question?</p>
      </main>
      <Header />
    </div>
  );
}

export default App;
