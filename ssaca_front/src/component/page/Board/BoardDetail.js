const BoardDetail = ({ boardDetail, onEdit, onRemove }) => {
  if (!boardDetail) {
    return <div>게시글이 선택되지 않았습니다.</div>;
  }

  const { id, title, content, price, img } = boardDetail;

  const handleRemove = async (id) => {
    if (window.confirm("정말로 삭제할껴?")) {
      await onRemove(id);
    }
  };

  return (
    <div className="BoardDetail">
      <div className="detailTitle">게시글 상세 내역</div>
      <div className="detailCard">
        <div className="left">
          <img src={img} />
        </div>
        <div className="right">
          <div>상태 : 판매중</div>
          <div>title : {title}</div>
          <div>content : {content}</div>
          <div>price : {price}</div>
          <button>채팅하기</button>
        </div>
        <br />
      </div>
      <div className="button">
        <button>수정</button>
        <button onClick={handleRemove}>삭제</button>
      </div>
    </div>
  );
};
export default BoardDetail;
