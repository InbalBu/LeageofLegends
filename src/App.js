import './App.css';
import ChampDisplay from './pages/ChampDisplay';
import { BrowserRouter as Router, Route, Routes } 
from "react-router-dom";
import Champion from './components/Champion';
import Header from './components/Header';
import ChampData from './pages/ChampData';

function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
        <Route path='/championinfo' element={<ChampData/>}/>
        <Route path='/' element={<ChampDisplay/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
