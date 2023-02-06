import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Category from "../../Pages/Category/Category";
import AddProduct from "../../Pages/DashBoard/AddProduct";
import AllBuyer from "../../Pages/DashBoard/AllBuyer";
import AllSeller from "../../Pages/DashBoard/AllSeller";
import Booking from "../../Pages/DashBoard/Booking";
import Buyer from "../../Pages/DashBoard/Buyer";
import Dashboard from "../../Pages/DashBoard/DashBoard";
import MyProfile from "../../Pages/DashBoard/MyProfile";
import MyWishList from "../../Pages/DashBoard/MyWishList";
import Payment from "../../Pages/DashBoard/Payment/Payment";
import ReportedItems from "../../Pages/DashBoard/ReportedItems";
import SellerPost from "../../Pages/DashBoard/SellerPost";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:name',
                element: <PrivateRoute><Category /></PrivateRoute>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard /></PrivateRoute>,
                children: [
                    {
                        index: true,
                        element: <PrivateRoute><MyProfile /></PrivateRoute>
                    },
                    {
                        path: 'allSeller',
                        element:<PrivateRoute><AllSeller></AllSeller></PrivateRoute>
                    },
                    {
                        path: 'allBuyer',
                        element:<PrivateRoute><AllBuyer></AllBuyer></PrivateRoute>

                    },
                    {
                        path: 'reportedItems',
                        element:<PrivateRoute><ReportedItems /></PrivateRoute>

                    },
                    {
                        path: 'booking',
                        element: <PrivateRoute><Booking /></PrivateRoute>

                    },
                    {
                        path: 'my-WishList',
                        element: <PrivateRoute><MyWishList /></PrivateRoute>

                    },
                    {
                        path: 'seller-post',
                        element: <PrivateRoute><SellerPost /></PrivateRoute>

                    },
                    {
                        path: 'add-a-product',
                        element: <PrivateRoute><AddProduct /></PrivateRoute>

                    },
                    {
                        path: 'buyers',
                        element: <PrivateRoute><Buyer /></PrivateRoute>

                    },
                    {
                        path: 'payment/:id',
                        element: <PrivateRoute><Payment /></PrivateRoute>

                    },

                ]

            },
            { path: '*', element: <NotFound></NotFound> }
        ]

    },
    { path: '*', element: <NotFound></NotFound> }
])