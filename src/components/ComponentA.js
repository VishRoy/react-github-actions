import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import User from './User';
import NotFound from './NotFound';
import Products from './Products';
import ProductDetail from './ProductDetail';


const ComponentA = () => {
    return (
        <Router>
            <nav>
            <Link to="/">Home</Link> | 
            <Link to="/about">About</Link> |
            <Link to="/user/123">User 123</Link>
            </nav>  

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:id" element={<User />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/products" element={<Products />}>
                    <Route path=":productId" element={<ProductDetail />} />
                </Route>
            </Routes>  
        </Router>
    )
}

export default ComponentA;