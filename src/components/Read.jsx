const Read = () => {
  return (
    <div className="read-section">
      <div className="read">
        <div className="profile-image-holder">
          <img src="avatar-rizky-hasanuddin.webp" alt="profile" />
        </div>
        <div className="details">
          <p>
            <span className="avatar-name">Rizky Hasanuddin</span> sent you a
            private message
          </p>
          <p>5 days ago</p>
          <div className="message-overview">
            Hello, thanks for setting up the Chess Clu. I've been a member for a
            few weeks now and I'm already having lots of fun and improving my
            game.
          </div>
        </div>
      </div>
      <div className="read-pers">
        <div className="profile-image-holder">
          <img src="avatar-kimberly-smith.webp" alt="profile" />
        </div>
        <div className="details">
          <p>
            <span className="avatar-name">kimberly Smith</span> commented on
            your picture
          </p>
          <p>1 week ago</p>
        </div>
        <div className="personal-avatar">
          <img src="image-chess.webp" alt="profile" />
        </div>
      </div>
      <div className="read">
        <div className="profile-image-holder">
          <img src="avatar-nathan-peterson.webp" alt="profile" />
        </div>
        <div className="details">
          <p>
            <span className="avatar-name">Nathan Peterson</span> reacted to your
            recent post
            <span className="avatar-post">
              {" "}
              5 end-game strategies to increase your win rate
            </span>
          </p>
          <p>2 weeks ago</p>
        </div>
      </div>
      <div className="read">
        <div className="profile-image-holder">
          <img src="avatar-anna-kim.webp" alt="profile" />
        </div>
        <div className="details">
          <p>
            <span className="avatar-name">Anna Kim</span> left the group
            <span className="avatar-join"> Chess Club</span>
          </p>
          <p>2 weeks ago</p>
        </div>
      </div>
    </div>
  );
};

export default Read;
