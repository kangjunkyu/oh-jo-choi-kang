const Wish = ({
    id,
    title,
    content,
    writer,
    regDate,
    viewCnt,
    price,
    img,
    orgImg,
    onItemClick
}) => {
    const handleClick = () => {
        onItemClick(id);
    };

    return (
        <div className="card" onClick={handleClick}>
      <img src={img} />
      <br />
      <div>
        <div>{title}</div>
        <br />
        <div>{price}</div>
        <br />
        <div>{writer}</div>
        <div>{new Date(regDate).toLocaleString()}</div>
      </div>
    </div>
    );
    
};

export default Wish;