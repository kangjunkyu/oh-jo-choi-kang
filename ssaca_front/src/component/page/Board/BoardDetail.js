const BoardDetail = ({ boardDetail, onEdit, onRemove }) => {
  if (!boardDetail) {
    return <div>게시글이 선택되지 않았습니다.</div>;
  }
  // id: "",
  // title: "",
  // content: "",
  // writer: "",
  // regDate: "",
  // viewCnt: 0,
  // price: "",
  // img: "",
  // orgImg: "",

  const { id, title, content, price, img } = boardDetail;

  const handleRemove = async (id) => {
    if (window.confirm("정말로 삭제할껴?")) {
      await onRemove(id);
    }
  };

  return (
    <div className="BoardDetail">
      <div>게시글 상세 내역</div>
      <div>
        <div>title : {title}</div>
        <div>content : {content}</div>
        <div>price : {price}</div>
        <div>img : {img}</div>
      </div>
      <br />
      <div>
        <button>수정</button>
        <button onClick={handleRemove}>삭제</button>
      </div>
    </div>
  );
};
export default BoardDetail;
