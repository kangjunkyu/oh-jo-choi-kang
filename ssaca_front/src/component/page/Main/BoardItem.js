// import "./BoardItem.module.css";
import React from "react";
import { Link } from "react-router-dom";

const BoardItem = ({
  id,
  title,
  content,
  writer,
  regDate,
  viewCnt,
  price,
  img,
  orgImg,
  onItemClick,
}) => {
  const handleClick = () => {
    console.log(`Item clicked: ${id}`);
    onItemClick(id);
  };

  return (
    <Link to={`boardDetail/${id}`}>
      <div className="card" onClick={handleClick}>
        <div>
          <img src={img} />
        </div>
        <br />
        <div>
          <div>{title}</div>
          <br />
          <div>{price}</div>
          <br />
          <div>{new Date(regDate).toLocaleString()}</div>
          <br />
          <div>{viewCnt}</div>
        </div>
      </div>
    </Link>
  );
};
export default BoardItem;
