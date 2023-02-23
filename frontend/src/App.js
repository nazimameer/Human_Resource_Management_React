import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
function App() {
  return (
    <BrowserRouter>
        <>
          <Routes>
              <Route path='/' element={ <LandingPage/> } />
              <Route path='/login' element={<Login/>}/>
              <Route path='/home'  element={ <Home/> }/>


          </Routes>
       </>
    </BrowserRouter>

  );
}

export default App;
