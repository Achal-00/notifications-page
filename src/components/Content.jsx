import Unread from "./Unread";
import Read from "./Read";

const Content = (props) => {
  return (
    <div className="wrapper">
      <Unread count={props.count} setCount={props.setCount} />
      <Read />
    </div>
  );
};

export default Content;
