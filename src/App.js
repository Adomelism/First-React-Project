import './App.css';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import ContactUs from './Pages//ContactUsPage/ContactUs';
import Programos from './Pages/Programos/Programos';
import NewsPage from './Pages/NewsPage/NewsPage';


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
        </ul>
      </nav>
      
      <Routes>
            <Route path='/ContactUs' element={<ContactUs />} />
            <Route path='/Programos' element={<Programos />} />
            <Route path='/NewsPage' element={<NewsPage />} />
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
