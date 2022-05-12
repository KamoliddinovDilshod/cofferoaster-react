import "../../../Assets/main.css"
import Link from "../../Links/Links";
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
        <div className="hero__box">
          <div className="hero__trunk">
            <h1 className="hero__title">
              Great coffee
              made simple.
            </h1>
          </div>
          <div className="hero__speechbox">
            <p className="hero__text">
              Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.
            </p>
          </div>
          <Link/>
        </div>
        </div>
      </section>
    </>
  );
};

export default Hero;