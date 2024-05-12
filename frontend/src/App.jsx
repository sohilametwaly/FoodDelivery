import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import { useContext, useState } from "react"
import Loginpopup from "./components/loginpopup/Loginpopup.jsx"
import Admin from "../../admin/src/Admin.jsx"
import List from "../../admin/src/pages/List/List.jsx"
import Add from "../../admin/src/pages/Add/Add.jsx"
import Orders from "../../admin/src/pages/Orders/Orders.jsx"
import Dashboard from "../../admin/src/pages/Dashboard/Dashboard.jsx"
import { ToastContainer } from "react-toastify"
import { StoreContext } from "./context/StoreContext.jsx"
const App = () => {

const[showlogin,setshowlogin] = useState(false)
const {isAdmin } = useContext(StoreContext)

  return !isAdmin?(
    <>
    <ToastContainer/>
    {showlogin?<Loginpopup setshowlogin={setshowlogin}/>:<></>}
    <div className="flex flex-col gap-5 ">
      <Navbar setshowlogin = {setshowlogin} />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder/> }/>
       
      </Routes>
    </div>
    </>
  ):(<> <Navbar setshowlogin = {setshowlogin} />
  <Admin/></>)
}

export default App
