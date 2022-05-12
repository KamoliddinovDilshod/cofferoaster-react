const SelectList = ({img , title , text}) => {
  return (
    <>
      <li className='select__item'>
        <img className='select__img' src={img} alt={title} />
        <h3 className='select__subtitle'>{title}</h3>
        <div className='select__packet'>
          <p className='select__subtext'>{text}</p>
        </div>
      </li>
    </>
  );
};

export default SelectList;