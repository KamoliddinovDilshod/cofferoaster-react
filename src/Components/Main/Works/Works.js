import Link from "../../Links/Links";
import Item from "../WorksItem/WorksItem"
import "../../../Assets/main.css";
import "./main.css";

const Works = () => {
  return (
    <>
      <section className='works'>
        <div className='container'>
          <div className='works__box'>
            <h2 className='works__title'>How it works</h2>

            <div className='works__spanbox'>
              <span className='works__span'></span>
              <hr className='works__line' />
              <span className='works__span'></span>
              <hr className='works__line' />
              <span className='works__span'></span>
            </div>

            <ul className='works__list'>
              <Item/>
            </ul>

            <Link />
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;