
import { createBrowserRouter, Route ,createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Cart from "./Components/Cart/Cart"
import Layout from "./Components/Layout/Layout"
import Details from "./Pages/Details/Details"
import About from "./Pages/About/About"
import Shop from "./Pages/Shop/Shop";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact"

function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/:id" element={<Details/>} />
        <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>} />
           <Route path="/blog" element={<Blog/>} />
              <Route path="/contact" element={<Contact/>} />
    </Route>
  ))


  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
