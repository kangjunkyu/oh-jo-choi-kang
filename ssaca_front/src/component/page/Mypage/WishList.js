import Wish from "./Wish";

const WishList = ({ myWishList}) => {
    return (
      <div className="WishList">
      
      <h4>{myWishList.length}개의 상품을 찜했습니다.</h4>

      <ul className="MyWish">
        {myWishList.map((it) => (
          <Wish
            key={it.id}
            {...it}
            
          />
        ))}
      </ul>
    </div>
    );
  };
  export default WishList;
  