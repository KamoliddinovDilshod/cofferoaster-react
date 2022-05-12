import Nav from "../Nav/Nav";
import Logo from "../../Assets/Images/logo.svg"
import "../../Assets/main.css"
import "./header.css";

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__box'>
          <a className='logo__link' href='#'>
            <img className='header__logo' src={Logo} alt='site logo' />
          </a>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;