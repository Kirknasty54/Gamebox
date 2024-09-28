
import AboutPage from './Pages/AboutPage';
import AddItem from './Pages/AddItem';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Favorited from './Pages/Favorited';
import Popular from './Pages/Popular';
import LandingPage from './Pages/LandingPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path= "/" element = {<LandingPage/>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
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
