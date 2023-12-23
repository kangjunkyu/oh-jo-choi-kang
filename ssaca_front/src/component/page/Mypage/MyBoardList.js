import MyBoardItem from "./MyBoardItem";

const MyBoardList = ({ myBoardList, onDetail, onItemClick }) => {
  return (
    <div className="BoardList">
      
      <h4>{myBoardList.length}개의 게시글을 작성하였습니다.</h4>

      <ul className="BoardListItem">
        {myBoardList.map((it) => (
          <MyBoardItem
            key={it.id}
            {...it}
            onDetail={onDetail}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
    </div>
  );
};

MyBoardList.defaultProps = {
  myBoardList: []
};

export default MyBoardList;
