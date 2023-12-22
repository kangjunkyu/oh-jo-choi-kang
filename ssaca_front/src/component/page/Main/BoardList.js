import BoardItem from "./BoardItem";
const BoardList = ({ boardList, onDetail }) => {
  return (
    <div>
      <h2>게시글 리스트</h2>
      <h4>{boardList.length}개의 게시글을 둘러보아요</h4>
      <div className="BoardList">
        {boardList.map((it) => (
          <BoardItem key={it.id} {...it} onDetail={onDetail} />
        ))}
      </div>
    </div>
  );
};

BoardList.defaultProps = {
  boardList: [],
};
export default BoardList;
