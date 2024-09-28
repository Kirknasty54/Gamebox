import GameCards from './Components/GameCards';
import NavBar from './Components/NavBar' 
import SignIn from './Pages/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element = {<NavBar/>}/>
        <Route path= "/Login" element = {<SignIn/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
