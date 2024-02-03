import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <ItemListContainer greeting={'Bienvenidos'}/>
        <ItemDetailContainer/>
          <Routes>
            <Route patch="/" element={<ItemListContainer/>}/>
            <Route patch="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route patch="/item/:itemId" element={<ItemDetailContainer/>}/>
            <Route patch="*" element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
