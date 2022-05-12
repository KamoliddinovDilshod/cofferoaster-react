const Workslist = ({number , title , text}) => {
  return (
    <>
      <li className='works__item'>
        <strong className='works__subtitle'>{number}</strong>
        <div className='works__trunk'>
          <h3 className='works__subtext'>{title}</h3>
        </div>
        <div className='works__packet'>
          <p className='works__text'>{text}</p>
        </div>
      </li>
    </>
  );
};

export default Workslist;