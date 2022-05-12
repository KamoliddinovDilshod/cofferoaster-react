import "./nav.css";

const Nav = function () {
  return (
    <>
      <nav className='header__nav nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a className='nav__link' href='#'>
              HOME
            </a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href='#'>
              ABOUT US
            </a>
          </li>
          <li className='nav__item'>
            <a className='nav__link' href='#'>
              CREATE YOUR PLANE
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;