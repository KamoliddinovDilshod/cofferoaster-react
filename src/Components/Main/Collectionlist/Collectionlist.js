import Item from "../Collectionitem/Item";
import first from "../../../Assets/Images/first.png";
import secound from "../../../Assets/Images/secound.png";
import three from "../../../Assets/Images/three.png";
import four from "../../../Assets/Images/four.png";

const List = () => {
  return (
    <>
      <Item
        img={first}
        title='Gran Espresso'
        text='Light and flavorful blend with cocoa and black pepper for an intense experience.'
      />
      <Item
        img={secound}
        title='Planalto'
        text='Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.'
      />
      <Item
        img={three}
        title='Piccollo'
        text='Mild and smooth blend featuring notes of toasted almond and dried cherry.'
      />
      <Item
        img={four}
        title='Danche'
        text='Ethiopian hand-harvested blend densely packed with vibrant fruit notes.'
      />
    </>
  );
};

export default List;