
import NavBar from './Components/NavBar' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path= "/" element = {<NavBar/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
