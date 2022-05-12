const Item = ({img, title, text}) => {
  return (
    <>
      <li className='collection__item'>
        <img className='collection__img' src={img} alt={title} />
        <h3 className='collection__title'>{title}</h3>
        <div className='collection__itembox'>
          <p className='collection__text'>{text}</p>
        </div>
      </li>
    </>
  );
};

export default Item;