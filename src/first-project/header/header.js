import logo from 'images/logo.svg';
import './header.css'
function Header(){
    return(
        <nav className="nav">
            <img src={logo} className="App-logo" alt="logo"/>
            <ul className="nav-items">
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
       </nav>
    );
}

export default Header;