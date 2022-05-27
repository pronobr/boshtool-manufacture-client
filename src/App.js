import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Others/Header/Header';
import ToolDetails from './components/ToolDetails/ToolDetails';
import PrivateAuth from './components/PrivateAuth/PrivateAuth';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders';
import AddReview from './components/Dashboard/AddReview';
import MyProfile from './components/Dashboard/MyProfile';
import NotFound from './components/NotFound/NotFound';
import Blogs from './components/Blogs/Blogs';
import Payment from './components/Dashboard/Payment';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import AddProduct from './components/Dashboard/AddProduct/AddProduct';
import ManageProducts from './components/Dashboard/ManageProducts/ManageProducts';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="login" element={<Login></Login>} />
         <Route path="register" element={<Register></Register>} />
         {/* <Route path="payment/:id" element={<Payment></Payment>} /> */}
         
         <Route path="*" element={<NotFound></NotFound>} />
         <Route path="/blogs" element={<Blogs></Blogs>} />
         <Route  path="/dashboard" element={
         <PrivateAuth>
           <Dashboard></Dashboard>
         </PrivateAuth>
        }>
         
         <Route index element ={<MyOrders></MyOrders>}></Route>
           <Route path="review" element={<AddReview></AddReview>}></Route>
           <Route path="profile" element={<MyProfile></MyProfile>}></Route>
           <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
           <Route path="manageproduct" element={<ManageProducts></ManageProducts>}></Route>
           <Route path="makeadmin" element={<MakeAdmin></MakeAdmin>}></Route>
           <Route path="payment/:id" element={<Payment></Payment>} />
          </Route>
         
         <Route path="/tool/:toolId" element={<PrivateAuth>
          <ToolDetails></ToolDetails>
         </PrivateAuth>} />
      </Routes>
    </div>
  );
}


{/* <Route path="/dashboard" element={<PrivateAuth><Dashboard /></PrivateAuth> } >
         <Route index element ={<MyOrders></MyOrders>}></Route>
           <Route path="review" element={<AddReview></AddReview>}></Route>
           <Route path="profile" element={<MyProfile></MyProfile>}></Route>
         </Route> */}

// <Route path="/" element={<Home />} />
//         <Route path="about" element={<Login></Login>}

export default App;
