import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {ThemeProvider ,useTheme} from '@mui/material/styles'





import {useState} from 'react';

import {dark,light} from './theme/theme';
import Home from './pages/Home/Home';
import Steak from './pages/Steak_house/Steak';
import Cro from './pages/Cro/Cro';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';









function App() {
  const [ appMode, setAppMode ] = useState<string>('dark');

  // console.log('mode',appMode);
  return (
    <>
      <ThemeProvider theme={appMode === 'dark' ? dark : light}>
          <BrowserRouter>
            <Header appMode={appMode} setAppMode={setAppMode}/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='_steak' element={<Steak/>} />
              <Route path='_cro' element={<Cro/>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
