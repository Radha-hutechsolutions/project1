import './App.css';
import SignIn from './SignIn';
import Home from './Home';
import Onboard from './Onboard';
import {
  BrowserRouter,
  Routes,
  Route, Navigate
} from "react-router-dom";

function App() {
  return (
  // <Home />
  <BrowserRouter>
        <Routes>
      <Route  path="/" element={<SignIn />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Onboard" element={<Onboard />} />
      </Routes>
  </BrowserRouter>
  // <Onboard />
  )
}

export default App;
