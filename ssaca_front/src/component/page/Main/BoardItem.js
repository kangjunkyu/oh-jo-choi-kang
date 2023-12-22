// import "./BoardItem.module.css";

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
}) => {
  return (
    <div className="card">
      <img src={img} />
      <br />
      <div>
        <div>{title}</div>
        <br />
        <div>{price}</div>
        <br />
        <div>{new Date(regDate).toLocaleString()}</div>
      </div>
    </div>
  );
};
export default BoardItem;
