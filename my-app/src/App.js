import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import './App.css';
import Auth from './Auth';
import Signin from './Signin';
import Navbar from './Navbar'
import Home from './Home';
import Waza from './Waza';
import Foumban from './Foumban'
import Limbe from './Limbe';
import Ekom from './Ekom';
import DownBeach from './Downbeach';
import Jully from './Jully';
import Febe from './Febe';
import Rabingha from './Rabingha';
import Adrien from './Adrien';
import Amar from './Amar';
import Reservation from './Reservation';
import Hotel from './Hotel';
import Trip from './Trip';
import My  from './Myreservation';
import Welcome from './Welcome';
import './Auth.css'


function App() {
  return (
    <Router basename="/GK-Trips">
      {/* ... */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/waza' element={<Waza />} />
        <Route path='/foumban' element={<Foumban />} />
        <Route path='/limbe' element={<Limbe />} />
        <Route path='/ekom' element={<Ekom />} />
        <Route path='/downbeach' element={<DownBeach />} />
        <Route path='/jully' element={<Jully />} />
        <Route path='/febe' element={<Febe />} />
        <Route path='/rabingha' element={<Rabingha />} />
        <Route path='/adrien' element={<Adrien />} />
        <Route path='/amar' element={<Amar />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/myreservation' element={<My />} />
        <Route path='/hotel' element={<Hotel />} />
        <Route path='/trip' element={<Trip />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
   
    
  );
}

export default App;
