import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Navigation from "./Navigation";
import Product from "./Product";
import Product2 from "./Product2";
function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Home />
      <Product/>
      <Product2/>
      
    </div>
  );
}

export default App;
