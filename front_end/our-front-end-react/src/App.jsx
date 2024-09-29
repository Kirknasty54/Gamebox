import Theme from "./Components/Theme"
import AboutPage from './Pages/AboutPage';
import BrowseGames from "./Pages/BrowseGames";
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Favorited from './Pages/Favorited';
import Popular from './Pages/Popular';
import LandingPage from './Pages/LandingPage';
import Footer from './Components/Footer';
import Profile from './Pages/Profile';
import Privacy from "./Pages/Privacy";


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import GoToGame from "./Pages/GoToGame";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path= "/" element = {<LandingPage/>}/>
        <Route path="/GoToGame" element={<GoToGame />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Browse" element={<BrowseGames />} />
        <Route path="/Favorited" element={<Favorited />} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
    <Theme/>
    <Footer/>
    
    </>
  )
}

export default App