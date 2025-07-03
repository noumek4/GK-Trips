import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Auth from './Auth';
import Home from './Home';
import Foumban from './Foumban';
import './Auth.css'


function App() {
  return (
    <Router>
      <nav style={{ padding:20, background:'#eee'}}>
        <Link to="/Auth" style={{marginRight: 10}}>Create an account</Link>
        <Link to="/Foumban" style={{marginRight: 10}}>Foumban</Link>
        <Link to="/Home" style={{marginRight: 10}}>Home</Link>
      </nav>

      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/foumban' element={<Foumban />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
   
    
  );
}

export default App;
