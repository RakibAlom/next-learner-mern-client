import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import Main from '../layouts/Main/Main';
import About from '../pages/About/About';
import Blog from '../pages/Blog/Blog';
import BlogDetails from '../pages/Blog/BlogDetails/BlogDetails';
import Courses from '../pages/Courses/Courses';
import Home from '../pages/Home/Home';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      { path: '/', element: <Home></Home> },
      {
        path: 'coureses',
        element: <Courses></Courses>,
        loader: () => fetch(`http://localhost:5000/courses`)
      },
      {
        path: 'courese/:slug',
        element: <Courses></Courses>,
        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.slug}`)
      },
      { path: '/blogs', element: <Blog></Blog> },
      {
        path: '/blog/:id',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/blog/${params.slug}`)
      },
      { path: '/about', element: <About></About> },
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },
    ]
  }
])
