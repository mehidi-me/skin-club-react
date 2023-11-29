import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import './index.css'
import Layout from './app/home/layout.tsx';
import Home from './app/home/page.tsx';
import Overview from './app/home/overview-1/page.tsx';
import Overview2 from './app/home/overview-2/page.tsx';
import Overview3 from './app/home/overview-3/page.tsx';
import AfterCareForm from './app/home/admin/after-care-form/page.tsx';
import AdminProducts from './app/home/admin/products/page.tsx';
import Treatment from './app/home/admin/treatments/page.tsx';
import AfterCare from './app/home/after-care/page.tsx';
import AfterCareDetails from './app/home/after-care/[id]/page.tsx';
import AfterCare2 from './app/home/after-care-2/page.tsx';
import FAQ from './app/home/faq/page.tsx';
import LiveChat from './app/home/live-chat/page.tsx';
import Message from './app/home/message/page.tsx';
import PatientManagement from './app/home/patient-management/page.tsx';
import Profile from './app/home/profile/page.tsx';
import UserManagement from './app/home/user-management/page.tsx';
import AuthLayout from './app/auth/layout.tsx';
import ForgotPassword from './app/auth/forgot-password/page.tsx';
import Login from './app/auth/login/page.tsx';
import Register from './app/auth/register/page.tsx';
import ResetPassword from './app/auth/reset-password/page.tsx';
import NotFound from './app/not-found.tsx';



export const metadata = {
  title: "Skin Club",
  description: "Skin Club",
};

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound/>,
  },
  {
    path: "/",
    element: <Layout><Home/></Layout>,
  },
  {
    path: "overview-1",
    element: <Layout><Overview /></Layout>,
  },
  {
    path: "overview-2",
    element: <Layout><Overview2/></Layout>,
  },
  {
    path: "overview-3",
    element: <Layout><Overview3/></Layout>,
  },
  {
    path: "admin/after-care-form",
    element: <Layout><AfterCareForm/></Layout>,
  },
  {
    path: "admin/products",
    element: <Layout><AdminProducts/></Layout>,
  },
  {
    path: "admin/treatments",
    element: <Layout><Treatment/></Layout>,
  },
  {
    path: "after-care",
    element: <Layout><AfterCare/></Layout>,
  },
  {
    path: "after-care/:id",
    element: <Layout><AfterCareDetails/></Layout>,
  },
  {
    path: "after-care-2",
    element: <Layout><AfterCare2/></Layout>,
  },
  {
    path: "faq",
    element: <Layout><FAQ/></Layout>,
  },
  {
    path: "live-chat",
    element: <Layout><LiveChat/></Layout>,
  },
  {
    path: "message",
    element: <Layout><Message/></Layout>,
  },
  {
    path: "patient-management",
    element: <Layout><PatientManagement/></Layout>,
  },
  {
    path: "profile",
    element: <Layout><Profile/></Layout>,
  },
  {
    path: "user-management",
    element: <Layout><UserManagement/></Layout>,
  },

  //auth routes

  {
    path: "forgot-password",
    element: <AuthLayout><ForgotPassword/></AuthLayout>
  },
  {
    path: "login",
    element: <AuthLayout><Login/></AuthLayout>
  },
  {
    path: "register",
    element: <AuthLayout><Register/></AuthLayout>
  },
  {
    path: "reset-password",
    element: <AuthLayout><ResetPassword/></AuthLayout>
  },
],{basename:"/skin-club-react"});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
    </Helmet>
    <div
      className="min-h-screen bg-background font-sans antialiased flex flex-col overflow-x-hidden"
      style={{fontFamily:"'Cabin', sans-serif"}}
    >
     <RouterProvider router={router} />
    </div>
    
  </React.StrictMode>
);

