import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import StoreDetails from './components/StoreDetails';
import StoreList from './components/StoreList';
import EditStore from './components/EditStore';

function App() {
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/stores/new')
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1 className='fr cr'>Find A Store! <div>
      <Link to="/api/stores" className="btn btn-nav">
                Home
                </Link>
        </div></h1>
      <Routes>
        <Route element={<Form />} path="api/stores/new" />
        <Route element={<StoreList />} path="api/stores" />
        <Route element={<StoreDetails />} path="api/stores/:id" />
        <Route element={<EditStore />} path="api/stores/edit/:id" />
      </Routes>
    </div>
  );
}

export default App;
