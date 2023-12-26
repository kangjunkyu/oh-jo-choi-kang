import Wish from "./Wish";

const WishList = ({ myWishList, onItemClick}) => {
    return (
      <div className="WishList">
      
      <h4>{myWishList.length}개의 상품을 찜했습니다.</h4>

      <ul className="BoardListItem">
        {myWishList.map((it) => (
          <Wish
            key={it.id}
            {...it}
            onItemClick={onItemClick}
          />
        ))}
      </ul>
    </div>
    );
  };
  export default WishList;
  