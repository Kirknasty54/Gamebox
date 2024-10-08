import Theme from "./Components/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './Pages/AboutPage';
import BrowseGames from "./Pages/BrowseGames";
import SignUp from './Pages/SignUp';
import Favorited from './Pages/Favorited';
import Popular from './Pages/Popular';
import LandingPage from './Pages/LandingPage';
import Footer from './Components/Footer';
import Profile from './Pages/Profile';
import Privacy from "./Pages/Privacy";
import TermsOfService from "./Pages/TermsOfService";
import GoToGame from "./Pages/GoToGame";
import 'bootstrap/dist/css/bootstrap.min.css';
import Settings from "./Components/Settings";
import ProtectedRoute from "./Components/ProtectedRoute";
import UserHome from "./Components/UserHome";
import Background from "./Components/Background";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Background />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Home" element={<LandingPage />} />
        <Route path="/GoToGame/:gameId" element={<GoToGame />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Browse" element={<BrowseGames />} />
        <Route path="/Favorited" element={<Favorited />} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/UserHome" element={<ProtectedRoute><UserHome /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
