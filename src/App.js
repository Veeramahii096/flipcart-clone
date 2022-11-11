import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Navigation from "./Navigation";
function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
