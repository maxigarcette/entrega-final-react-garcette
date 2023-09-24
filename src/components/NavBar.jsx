import {CartWidget} from './CartWidget'
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavBar() {
  return (
    <div className='header'>
      <div className='ladoIzquierdo'>
        <Link className='link' to="/"><h2 className='logo'>buy&sell.com</h2></Link>
        <nav>
            <NavDropdown className='dropdown' title="Categories" id="basic-nav-dropdown">
              <Link to="/category/clothes">Clothes</Link>
              <Link to="/category/cars">Cars</Link>
              <Link to="/category/electronics">Electronics</Link>
            </NavDropdown>
        </nav>
      </div>
      <div className='ladoDerecho'>
        <CartWidget/>
      </div>
    </div>
  );
}

