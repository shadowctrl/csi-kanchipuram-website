import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Navbar, Main } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={`bg-primary`}>
      <div>
        <Navbar />
      </div>

      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
