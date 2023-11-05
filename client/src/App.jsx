import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Header from './components/Header';

export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp/>} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/about" element={<About />} />
  </Routes>
  </BrowserRouter>;
}
