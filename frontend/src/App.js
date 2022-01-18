import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './pages/Index/Index';
import Dashboard from './pages/Dashboard/Dashboard';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          {/* <Route exact path='/' element={<Index />}></Route> */}
          <Route exact path='/' element={<Dashboard />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
