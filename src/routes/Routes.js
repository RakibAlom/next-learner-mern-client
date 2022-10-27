import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';
import Main from '../layouts/Main/Main';
import About from '../pages/About/About';
import BlogDetails from '../pages/Blog/BlogDetails/BlogDetails';
import Courses from '../pages/Courses/Courses';
import Home from '../pages/Home/Home';
import NotFound404 from '../pages/Other/NotFound/NotFound404';
import Blogs from '../pages/Blog/Blogs';
import CourseDetails from '../pages/Courses/CourseDetails/CourseDetails';
import CoursePurchase from '../pages/Courses/CoursePurchase/CoursePurchase';
import PrivateRoutes from './PrivateRoutes';
import FAQ from '../pages/FAQ/FAQ';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      { path: '/', element: <Home></Home> },
      {
        path: 'courses',
        element: <Courses></Courses>,
        loader: () => fetch(`http://localhost:5000/courses`)
      },
      {
        path: 'courses/:slug',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.slug}`)
      },
      {
        path: '/courses/check-out/:id',
        element: <PrivateRoutes><CoursePurchase></CoursePurchase></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/courses/check-out/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>,
        loader: () => fetch(`http://localhost:5000/blog`)
      },
      {
        path: '/blog/:slug',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/blog/${params.slug}`)
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>,
      },
      { path: '/about', element: <About></About> },
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },
      { path: '*', element: <NotFound404></NotFound404> }
    ]
  },
])
