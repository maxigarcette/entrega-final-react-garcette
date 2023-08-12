import {CartWidget} from './CartWidget'

export function NavBar() {
  return (
    <>
      <div className='header'>
        <h2 className='logo'>comproYvendo.com</h2> 
          <div className='ladoDerecho'>
            <nav>
              <a href="#">Inicio</a>
              <a href="#">Categorias</a>
              <a href="#">Contacto</a>
            </nav>
            <CartWidget/>0
          </div>
      </div>
    </>
  );
}

