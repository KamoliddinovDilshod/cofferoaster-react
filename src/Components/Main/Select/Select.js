import SelectItem from "../Selectitem/SelectItem";
import "../../../Assets/main.css"
import "./main.css"

const Select = () => {
  return <>
  <section className="select">
      <div className="container">
        <div className="select__box">
          <h2 className="select__title">
            Why choose us?
          </h2>
          <div className="select__textbox">
            <p className="select__text">
              A large part of our role is choosing which particular coffees will be featured 
              in our range. This means working closely with the best coffee growers to give 
              you a more impactful experience on every level.
            </p>
          </div>
          
          <ul className="select__list">
            <SelectItem/>
          </ul>
          
        </div>
      </div>
    </section>
  </>;
};

export default Select;