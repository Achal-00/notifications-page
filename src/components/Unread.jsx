import { useState } from "react";

const Unread = (props) => {
  const [disabled, setDisabled] = useState({
    first: false,
    second: false,
    third: false,
  });

  return (
    <div className="unread-section">
      <div
        className="unread"
        onClick={
          disabled.first
            ? () => {}
            : (e) => {
                if (props.count > 0) {
                  props.setCount((prev) => prev - 1);
                }
                e.currentTarget.style.background = "none";
                document.querySelector(".first-not").style.display = "none";
                setDisabled({ ...disabled, first: true });
              }
        }
      >
        <div className="profile-image-holder">
          <img src="avatar-mark-webber.webp" alt="profile" />
        </div>
        <div className="details">
          <p>
            <span className="avatar-name">Mark Webber</span> reacted to your
            recent post
            <span className="avatar-post"> My first tournament today!</span>
            <div className="red-dot first-not"></div>
          </p>
          <p>1m ago</p>
        </div>
      </div>
      <div
        className="unread"
        onClick={
          disabled.second
            ? () => {}
            : (e) => {
                if (props.count > 0) {
                  props.setCount((prev) => prev - 1);
                }
                e.currentTarget.style.background = "none";
                document.querySelector(".second-not").style.display = "none";
                setDisabled({ ...disabled, second: true });
              }
        }
      >
        <div className="profile-image-holder">
          <img src="avatar-angela-gray.webp" alt="profile" />
        </div>
        <div className="details">
          <p>
            <span className="avatar-name">Angela Gray</span> followed you
            <div className="red-dot second-not"></div>
          </p>
          <p>5m ago</p>
        </div>
      </div>
      <div
        className="unread"
        onClick={
          disabled.third
            ? () => {}
            : (e) => {
                if (props.count > 0) {
                  props.setCount((prev) => prev - 1);
                }
                e.currentTarget.style.background = "none";
                document.querySelector(".third-not").style.display = "none";
                setDisabled({ ...disabled, third: true });
              }
        }
      >
        <div className="profile-image-holder">
          <img src="avatar-jacob-thompson.webp" alt="profile" />
        </div>
        <div className="details">
          <p>
            <span className="avatar-name">Jacob Thompson</span> has joined your
            group
            <span className="avatar-join"> Chess Club</span>
            <div className="red-dot third-not"></div>
          </p>
          <p>1 day ago</p>
        </div>
      </div>
    </div>
  );
};

export default Unread;
