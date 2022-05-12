import Nav from "../Nav/Nav"
import Logo from "../../Assets/Images/footer.svg"
import Facebook from "../../Assets/Images/facebook.svg"
import Instagram from "../../Assets/Images/instagram.svg"
import Twitter from "../../Assets/Images/twitter.svg"
import "../../Assets/main.css";
import "./main.css";

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className='footer__box'>
            <a className='footer__logolink' href='#'>
              <img
                className='footer__logo'
                src={Logo}
                alt='coffeeroaster logo'
              />
            </a>

            <Nav color="dimgray"/>

            <div className='footer__social'>
              <a className='footer__imglink' href='#' target='blank'>
                <img
                  className='footer__img'
                  src={Facebook}
                  alt='facebook logo'
                />
              </a>
              <a className='footer__imglink' href='#' target='blank'>
                <img
                  className='footer__img'
                  src={Twitter}
                  alt='twitter logo'
                />
              </a>
              <a className='footer__imglink' href='#' target='blank'>
                <img
                  className='footer__img'
                  src={Instagram}
                  alt='instagram logo'
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;