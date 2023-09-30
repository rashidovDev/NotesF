import {Navbar, Registration, Login, Home, NoPage} from "./components/Navigate"
import {Routes, Route} from "react-router-dom"
import {useDispatch} from "react-redux"
import { useEffect } from "react"
import { auth } from "./actions/user"

function App() {

const dispatch = useDispatch()

useEffect(() => {
  dispatch(auth())
}, [])

  return (
   <div>
   <Navbar />
   <Routes>
    <Route path = "/"  element={<Home/>}/>
    <Route path = "/registration"  element={<Registration/>}/>
    <Route path = "/login"  element={<Login/>}/>
    <Route path="*" element={<NoPage/>} />
   </Routes>
   </div>
  );
}

export default App;


