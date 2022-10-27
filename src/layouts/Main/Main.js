import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeControlContext';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Toaster } from 'react-hot-toast';

const Main = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div>
      <Header></Header>
      <main className={`container my-4`}>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default Main;