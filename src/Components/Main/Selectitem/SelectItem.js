import SelectList from "../SelectList/SelectList";
import shape from "../../../Assets/Images/Shape.svg";
import gift from "../../../Assets/Images/gift.svg"
import car from "../../../Assets/Images/car.svg"

const SelectItem = () => {
  return (
    <>
      <SelectList
        img={shape}
        title='Best quality'
        text='Discover an endless variety of the world’s best artisan coffee from each of our roasters.'
      />
      <SelectList
        img={gift}
        title='Exclusive benefits'
        text='Special offers and swag when you subscribe, including 30% off your first shipment.'
      />
      <SelectList
        img={car}
        title='Free shipping'
        text='We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'
      />
    </>
  );
};

export default SelectItem;