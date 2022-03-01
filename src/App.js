import React from 'react';
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

const handleClick = async () => {
  const source = CancelToken.source();
  const response_object = await postCategory('ZtyZo5GhHFuQ9tgbKAROkGzK3jTVSlAtEswA8paYfAQ', 'newCAT',source.token);
  console.log(response_object)
}


function App() {
  return (
    <ThemeProvider theme={rainbowTheme}>
      <NavBar>

        <Button onClick={handleClick}>Do API Call</Button>

        <h1>My First React Page!!!!!!</h1>
        <Error  className="my_class">
          Some Rando - Error
        </Error>
        <Button variant="text" onClick={()=>alert('clciky')}>Click Me Beautiful</Button>
        <img  src="https://res.cloudinary.com/cae67/image/upload/v1628184276/sample.jpg" alt="test"/>
      
      </NavBar>
    </ThemeProvider>
  );
}

export default App;
