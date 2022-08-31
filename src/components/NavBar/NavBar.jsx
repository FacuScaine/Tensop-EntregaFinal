import './NavBar.css';
import logo from '../Imagenes/Tensop.png';
import { NavLink } from 'react-router-dom'

import CartWidget from '../CartLogica/CartWidget/CartWidget.jsx';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={'/'}>
                    <img src={logo} alt="Logo" width="100%" height="auto"></img>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link select" aria-current="page" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/clientes">Clientes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/empresa">Empresa</NavLink>
                        </li>
                        <li>
                            <div className="btn-group">
                                <button type="button" className="btn"><NavLink className="nav-link" to="/productos">Productos</NavLink></button>
                                <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="nav-link" to="/productos/domestico">Domesticos</NavLink></li>
                                    <li><NavLink className="nav-link" to="/productos/industrial">Industriales</NavLink></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <NavLink className="navbar-brand" to="/cart">
                                <CartWidget></CartWidget>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
};

export default NavBar