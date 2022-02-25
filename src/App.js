import React from 'react';
import './App.css';
import Button from './components/Button';
import Error from './components/Error';
import { ThemeProvider } from '@mui/material/styles';
import rainbowTheme from './themes/rainbowTheme';
import NavBar from './components/NavBar';

function App() {
  return (
    <ThemeProvider theme={rainbowTheme}>
      <NavBar>

        <h1>My First React Page!!!!!!</h1>
        <Error  className="my_class">
          Some Rando - Error
        </Error>
        <Button variant="text">Click Me Beautiful</Button>
        <img  src="https://res.cloudinary.com/cae67/image/upload/v1628184276/sample.jpg" alt="test"/>
      
      </NavBar>
    </ThemeProvider>
  );
}

export default App;
