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
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </Router>
   
    
  );
}

export default App;
