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
        loader: () => fetch(`https://next-learner-server.vercel.app/courses`)
      },
      {
        path: 'courses/:slug',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`https://next-learner-server.vercel.app/courses/${params.slug}`)
      },
      {
        path: '/courses/check-out/:id',
        element: <PrivateRoutes><CoursePurchase></CoursePurchase></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://next-learner-server.vercel.app/courses/check-out/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>,
        loader: () => fetch(`https://next-learner-server.vercel.app/blog`)
      },
      {
        path: '/blog/:slug',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`https://next-learner-server.vercel.app/blog/${params.slug}`)
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
