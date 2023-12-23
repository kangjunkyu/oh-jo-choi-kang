import BoardItem from "./BoardItem";
const BoardList = ({ boardList, onDetail, onRemove, onEdit, onItemClick }) => {
  return (
    <div className="BoardList">
      <h2>게시글 리스트</h2>
      <h4>{boardList.length}개의 게시글을 둘러보아요</h4>

      <ul className="">
        <li className="BoardListItem">
          {boardList.map((it) => (
            <BoardItem
              key={it.id}
              {...it}
              onDetail={onDetail}
              // onClick={() => onItemClick(it.id)}
              onItemClick={onItemClick}
            />
          ))}
        </li>

        {/* {boardList.map((board) => (
          <li key={board.id} onClick={() => onItemClick(board.id)}></li>
        ))} */}
      </ul>
    </div>
  );
};

BoardList.defaultProps = {
  boardList: [],
};
export default BoardList;
