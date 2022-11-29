import "../styles/common/Header.css";

export default function Header({ isLogin }) {
  return (
    <div className="flex header">
      <div className="w-8 bold">myAuction</div>
      <input className="search_bar" />
      {isLogin && <div>마이페이지</div>}
      {!isLogin && (
        <div className="flex">
          <span className="small ">로그인</span>
          <span className="small ">회원가입</span>
        </div>
      )}
    </div>
  );
}
