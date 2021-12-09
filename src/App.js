import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import EventHandling from './Components/eventhandling';
import Gallery from './Components/gallery';
import Header from "./Components/header";
import Home from './Components/home';
import Login from './Components/login';
import ProductList from './Components/ProductList';
import Signup from "./Components/signup";
import { useState } from 'react';
import { ProductProvider } from './productContext';
import AddVideo from './Components/addVideo';
import ListVideos from './Components/listvideos';
import ViewVideo from './Components/view';
import Chat from './Components/chat';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const lightTheme = createTheme({
    palette: {
      mode: "light" ,
      primary:{
        main:"#e41616",
        dark:"#5b12d1",
      },
      
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
     
      background:{
        paper: "#1c113a",
      },
    },
  });

  


  return (

      <ThemeProvider theme ={ darkMode ? darkTheme : lightTheme}>
        <ProductProvider>
      <BrowserRouter>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
      <Route path ="/home" component={Home}/>
      <Route path ="/login" component={Login}/>
      <Route path ="/event" component={EventHandling}/>
      <Route path ="/gallery" component={Gallery}/>
      <Route path ="/signup" component={Signup}/>
      <Route path ="/browse" component={ProductList}/>
      <Route path ="/addvideo" component={AddVideo}/>
      <Route path ="/listvideos" component={ListVideos}/>
      <Route path ="/view/:id" component={ViewVideo}/>
      <Route path ="/chat" component={Chat}/>




      </BrowserRouter>
      </ProductProvider>
      </ThemeProvider>
  );
}

export default App;
