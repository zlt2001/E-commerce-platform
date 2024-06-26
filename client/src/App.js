import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom"
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './app.scss'
import WishList from './pages/WishList/WishList';
import LogIn from './pages/LogIn/LogIn';
import About from './pages/About/About';
import Contact from './components/Contact/Contact';

// 定义 Layout 组件
const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      {/* 哪里想放 children 嵌套路由，就放 Outlet 组件 */}
      <Outlet />
      <Footer />
    </div>
  )
}

//定义嵌套路由关系
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      }
    ]
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
