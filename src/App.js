import React from 'react';
import AboutMe from './AboutMe';
import './App.css';
import Home from './Home';
import OtherLang from './OtherLang';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {

return (
  <div>

<Router>
  <nav  className = 'containerThree'>
    <Link to='/' className='btnThree'>Курсы</Link>
    <Link to='/OtherLang' className='btnThree'>Другие языки</Link>
    <Link to='/AboutMe' className='btnThree'>Об авторе</Link>
  </nav>

  <Routes>
    <Route path='/' element = {<Home />}  />
    <Route path='/OtherLang' element = {<OtherLang />} />
    <Route path='/AboutMe' element = {<AboutMe />} />
  </Routes>

</Router>
<br/>
</div>
  )
}

export default App;