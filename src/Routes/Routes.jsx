import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
// import PrivateRoute from "./PrivateRoute";
import PostJob from "../Pages/PostJob/PostJob";
import PrivateRoute from "./PrivateRoute";
import MyJobs from "../Pages/MyJobs/MyJobs";
import Edit from "../Pages/MyJobs/Edit";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/myJob",
        element: <PrivateRoute><MyJobs /></PrivateRoute>
      },
      {
        path: '/postedJob',
        element: <PrivateRoute><PostJob /></PrivateRoute>
      },
      {
        path: '/edit/:id',
        element: <PrivateRoute><Edit /></PrivateRoute>,
        loader: ({params}) => fetch(`https://job-portal-server-ifva1t51z-guljer77.vercel.app/all-jobs/${params.id}`)
      }
    ] 
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signUp',
    element: <Signup />
  }
])