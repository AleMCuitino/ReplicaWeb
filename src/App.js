import './App.css';
import './style/Style.css';
import Home from './views/Home'
import Discover from './views/Discover'
import Join from './views/Join'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='discover /' element={<Discover />} />
        <Route path='join /' element={<Join />} />
      </Routes>
    </div>
  );
}

export default App;
