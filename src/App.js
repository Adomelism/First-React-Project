import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import ContactUs from './Pages//ContactUsPage/ContactUs';
import Programos from './Pages/Programos/Programos';
import NewsPage from './Pages/NewsPage/NewsPage';
import CounterPage from './Pages/CounterPage/CounterPage';
import ShoppingListPage from './Pages/ShoppingListPage/ShoppingListPage';
import CitiesPage from './Pages/CitiesPage/CitiesPage';
import ToDoPage from './Pages/ToDoPage/ToDoPage';
import ChuckNorrisPage from './Pages/ChuckNorrisPage/ChuckNorrisPage';
import DogsPage from './Pages/DogsPage/DogsPage';


function App() {
  return (
    <div className="App">

<nav className='main-navigation'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink to='/' className='nav-link'>Home</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/ContactUs' className='nav-link'>Contact Us</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/Programos' className='nav-link'>Programos</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/NewsPage' className='nav-link'>Naujienos</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/CounterPage' className='nav-link'>Counter</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/ShoppingListPage' className='nav-link'>Shopping-List</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/CitiesPage' className='nav-link'>Cities</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/ToDoPage' className='nav-link'>To-Do-Page</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/ChuckNorrisPage' className='nav-link'>Chuck Norris API</NavLink>
          </li>

          <li className='nav-item'>
            <NavLink to='/DogsPage' className='nav-link'>Dogs API</NavLink>
          </li>
        </ul>
      </nav>
      
      <Routes>
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Programos' element={<Programos />} />
            <Route path='/NewsPage' element={<NewsPage />} />
            <Route path='/CounterPage' element={<CounterPage />} />
            <Route path='/ShoppingListPage' element={<ShoppingListPage />} />
            <Route path='/CitiesPage' element={<CitiesPage />} />
            <Route path='/ToDoPage' element={<ToDoPage />} />
            <Route path='/ChuckNorrisPage' element={<ChuckNorrisPage />} />
            <Route path='/DogsPage' element={<DogsPage />} />
            <Route path='/' element={ 
              <div>
                <h1>HomePage</h1>
                <p>This is Home Page under construction...</p>
              </div>
              } />
            <Route path='*' element={
              <div>
                <h1>404 error. Page not found.</h1>
                <Link to='/'>Go Back to HomePage</Link>
              </div>
              } />
        </Routes>

    </div>
  );
}

export default App;
