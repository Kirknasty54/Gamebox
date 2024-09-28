import GameCards from './Components/GameCards';
import NavBar from './Components/NavBar' 
import AboutPage from './Pages/AboutPage';
import AddItem from './Pages/AddItem';
import SignIn from './Pages/SignIn';
import Favorited from './Pages/Favorited';
import Popular from './Pages/Popular';
import LandingPage from './Components/LandingPage';
import Theme from './Components/Theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element = {<LandingPage/>}/>
      </Routes>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/AddItem" element={<AddItem />} />
        <Route path="/Favorited" element={<Favorited />} />
        <Route path="/Popular" element={<Popular />} />
      </Routes>
    </BrowserRouter>
    <Theme/>

    </>
  )
}

export default App
