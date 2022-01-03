import React from "react";
import './Menu.css';
import { Link } from "react-router-dom";
const Menu = props=>(
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to='/'>Inicio</Link>
                    
                </li>
                <li>
                    <Link to='/param/123'>Params #1</Link>
                    
                </li>
                <li>
                    <Link to='/param/insulina'>Params #2</Link>
                    
                </li>
                <li>
                    <Link to='/About'>Sobre</Link>
                    
                </li>
            </ul>
        </nav>
    </aside>
)
export default Menu;