import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import { useState } from "react"
import Loginpopup from "./components/loginpopup/Loginpopup.jsx"
import Admin from "../../admin/src/Admin.jsx"
import { ToastContainer } from "react-toastify"
const App = () => {

const[showlogin,setshowlogin] = useState(false)

  return (
    <>
    <ToastContainer/>
    {showlogin?<Loginpopup setshowlogin={setshowlogin}/>:<></>}
    <div className="flex flex-col gap-5 ">
      <Navbar setshowlogin = {setshowlogin} />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder/> }/>
        {/* <Route path="/admin" element={<Admin/>} ></Route> */}
      </Routes>
    </div>
    </>
  )
}

export default App
