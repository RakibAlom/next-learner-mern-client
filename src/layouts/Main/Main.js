import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Toaster } from 'react-hot-toast';

const Main = () => {
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