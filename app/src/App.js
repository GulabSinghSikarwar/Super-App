import logo from './logo.svg';
import './App.css';
import Navbar from './components/UI/Navbar'
import { BrowserRouter } from 'react-router-dom'
import RoutesComp from './components/utils/routes';

function App() {
  return (
    <div className="App">
      <header >
        <BrowserRouter>
        <RoutesComp/>
        
          <Navbar />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
