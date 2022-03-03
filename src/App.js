import React, {useState} from 'react';
import './App.css';
import Button from './components/Button';
import Error from './components/Error';
import { ThemeProvider } from '@mui/material/styles';
import rainbowTheme from './themes/rainbowTheme';
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


const handleClick = async () => {
  const source = CancelToken.source();
  const response_object = await postCategory('ZtyZo5GhHFuQ9tgbKAROkGzK3jTVSlAtEswA8paYfAQ', 'newCAT',source.token);
  console.log(response_object)
}


function App() {
  const [alert, setAlert]=useState({});

  return (
    <ThemeProvider theme={rainbowTheme}>
      <SnackBar alert={alert} setAlert={setAlert}/>
      <NavBar>
        <CategoryBar setAlert={setAlert}/>
        <ItemBrowser />
        <Button onClick={handleClick}>Do API Call</Button>

        <AdminMenu/>
      </NavBar>
    </ThemeProvider>
  );
}

export default App;
