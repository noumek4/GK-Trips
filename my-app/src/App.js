import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import './App.css';
import Auth from './Auth';
import Signin from './Signin';
import Navbar from './Navbar'
import Home from './Home';
import './Auth.css'


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
   
    
  );
}

export default App;
