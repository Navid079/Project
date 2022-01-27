import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Index from './pages/Index/Index';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Index />}></Route>
          <Route exact path='/dashboard' element={<Dashboard />}>
            <Route path='' element={<h1>Dashboard</h1>} />
            <Route
              path='not-validated'
              element={<h1>Your account is not validated. Please wait</h1>}
            />
            <Route
              path='not-completed'
              element={<Profile />}
            />
            <Route path='report' element={<h1>Report</h1>} />
            <Route path='newsletter' element={<h1>Newsletter</h1>} />
            <Route path='items' element={<h1>Items</h1>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
