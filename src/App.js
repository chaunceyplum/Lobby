import Home from './components/Home';
import MyNav from './components/MyNav';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './components/Contact';
import About from './components/About';
import Service from './components/Service';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';


function App() {
  return (
    <div>
      <MyNav sticky="top"/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/contact' element={<Contact />} />

          <Route path='/about' element={<About />} />

          <Route path='/service' element={<Service />} />
 
          <Route path='/login' element={<LogIn />} />

          <Route path='/signup' element={<SignUp />} />


        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
