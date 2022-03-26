import "./App.css";
import AboutReact from "./component/About-React/AboutReact";
import Shop from "./component/Shop/Shop";

function App() {
  return (
    <div className="App">
      <h1>Sneaker Junkies</h1>
      <Shop></Shop>
      <AboutReact></AboutReact>
    </div>
  );
}

export default App;
