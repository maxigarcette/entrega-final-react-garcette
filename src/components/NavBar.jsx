import {CartWidget} from './CartWidget'
import { Link } from 'react-router-dom';

export function NavBar() {
  return (
    <div className='header'>
      <Link className='link' to="/"><h2 className='logo'>comproYvendo.com</h2></Link>
        <div className='ladoDerecho'>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/category/clothes">Clothes</Link>
            <Link to="/category/cars">Cars</Link>
            <Link to="/category/electronics">Electronics</Link>
          </nav>
          <CartWidget/>0
        </div>
    </div>
  );
}

