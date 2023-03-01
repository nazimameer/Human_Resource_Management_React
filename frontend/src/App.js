import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Employees from './Pages/Employees';
import AddEmployee from './Pages/AddEmployee';
function App() {
  return (
    <BrowserRouter>
        <>
          <Routes>
              <Route path='/' element={ <LandingPage/> } />
              <Route path='/login' element={<Login/>}/>
              <Route path='/hr/home'  element={ <Home/> }/>
              <Route path='/hr/employees' element={ <Employees/> }/>
              <Route path='/hr/addemployee' element={ <AddEmployee/> }/>
          </Routes>
       </>
    </BrowserRouter>

  );
}

export default App;
