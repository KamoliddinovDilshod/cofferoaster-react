import "../../../Assets/main.css";
import List from "../Collectionlist/Collectionlist";
import "./main.css";

const Collection = () => {
  return (
    <>
      <section className='collection'>
        <div className='container'>
          <div className='collection__box'>
            <h2 className='visually-hidden'>our collection</h2>
            <ul className='collection__list'>
              <List/>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collection;
