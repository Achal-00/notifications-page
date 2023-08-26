const Header = (props) => {
  function resetHandler() {
    props.setCount(0);
    document
      .querySelectorAll(".unread")
      .forEach((x) => (x.style.background = "none"));
    document
      .querySelectorAll(".unread .red-dot")
      .forEach((x) => (x.style.display = "none"));
  }

  return (
    <div className="header">
      <div className="header-left">
        <h2>Notifications</h2>
        <div>{props.count}</div>
      </div>
      <div className="header-right">
        <p onClick={resetHandler}>Mark all as read</p>
      </div>
    </div>
  );
};

export default Header;
