import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";

import {BrowserRouter as Router,
  Routes,Route}
from 'react-router-dom';
import Home2 from "./Home2";
import Login from "./Login";
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
      
      <Route path='/'  element={<Home2/>}>
        
        
        </Route>
        <Route path='/login'  element={<Login/>}>
        
        
        </Route>


      </Routes>
      
      
      
      
    </div>
    </Router>
  );
}

export default App;
