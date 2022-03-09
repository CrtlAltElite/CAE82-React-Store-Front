import React, {useContext} from 'react';
import './App.css';
import Button from './components/Button';
import Error from './components/Error';
import NavBar from './components/NavBar';
import {getUser} from './api/apiBasicAuth';
import { postCategory } from './api/apiCategory';
import { getItemsByCat } from './api/apiItem';
import {CancelToken} from 'apisauce';
import LoginForm from './forms/LoginForm';
import CatForm from './forms/CatForm';
import AdminMenu from './components/AdminMenu';
import ItemForm from './forms/ItemForm';
import AdminSelectCat from './components/AdminSelectCat';
import CategoryBar from './components/CategoryBar';
import ItemBrowser from './components/ItemBrowser';
import SnackBar from './components/SnackBar';
import Cart from './components/Cart/Index';
import ShopBrowser from './views/ShopBrowser';
import AdminSelectItem from './components/AdminSelectItem';
import CartPage from './views/CartPage';
import AdminCategory from './views/AdminCategory';
import AdminItem from './views/AdminItems';
import {Routes, Route} from 'react-router-dom';
import Login from './views/Login';
import { AppContext } from './context/AppContext';
import Logout  from './views/Logout';
import RequireAdmin from './components/RequireAdmin';


const HomePage=()=>{return(<h1>Welcome to the show!</h1>)}


function App() {
  const {user}=useContext(AppContext)

  return (
    <>
      <SnackBar/>
      <NavBar>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/shop" element={<ShopBrowser/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/logout" element={<Logout/>}/>

          <Route path="/admincat" element={
          <RequireAdmin redirectTo={"/login"}>
            <AdminCategory/>
          </RequireAdmin>
        }/>
        
          <Route path="/adminitem" element={<RequireAdmin redirectTo={"/login"}><AdminItem/></RequireAdmin>}/>

        
        </Routes>

        
        {user.is_admin?<AdminMenu/>:''}

      </NavBar>
    </>
  );
}

export default App;


