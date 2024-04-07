import { useCallback } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
  const onVectorIconClick = useCallback(() => {
    // Please sync "feed page" to the project
  }, []);

  const onHome1393IconClick = useCallback(() => {
    // Please sync "feed page" to the project
  }, []);

  const onVectorIcon2Click = useCallback(() => {
    // Please sync "Search page" to the project
  }, []);

  const onNotificationIconClick = useCallback(() => {
    // Please sync "notification page" to the project
  }, []);

  const onGroupContainer5Click = useCallback(() => {
    // Please sync "Edit Profile" to the project
  }, []);

  return (
    <main className="profile-page" main>
      <img className="profile-page-child" alt="" src="/frame-16@2x.png" />
      <div className="profile-page-item" />
      <img className="profile-page-inner" alt="" src="/ellipse-4@2x.png" />
      <img
        className="vector-icon"
        alt=""
        src="/vector.svg"
        onClick={onVectorIconClick}
      />
      <div className="my-profile">My Profile</div>
      <div className="my-profile">My Profile</div>
      <div className="status-bar">
        <div className="div">11:07</div>
        <div className="icons">
          <img className="wi-fi-icon" alt="" src="/wifi.svg" />
          <img className="wi-fi-icon" alt="" src="/reception.svg" />
          <img className="wi-fi-icon" alt="" src="/battery.svg" />
        </div>
      </div>
      <div className="himanshu-kaneriya-parent">
        <div className="himanshu-kaneriya">Himanshu Kaneriya</div>
        <div className="himanshukaneriya-123">himanshukaneriya_123</div>
      </div>
      <img className="rectangle-icon" alt="" src="/rectangle-31.svg" />
      <div className="posts-parent">
        <div className="posts">posts</div>
        <div className="div1">50</div>
      </div>
      <div className="parent">
        <div className="div2">780</div>
        <div className="posts">following</div>
      </div>
      <div className="m-parent">
        <div className="m">4.5M</div>
        <div className="posts">followers</div>
      </div>
      <img className="frame-icon" alt="" src="/frame-14@2x.png" />
      <img className="profile-page-child1" alt="" src="/frame-15@2x.png" />
      <img className="vector-icon1" alt="" src="/vector.svg" />
      <div className="group-parent">
        <div className="group-wrapper">
          <div className="group-wrapper">
            <div className="downbar" />
          </div>
        </div>
        <div className="home-1393-parent">
          <img
            className="home-1393-icon"
            alt=""
            src="/home1393.svg"
            onClick={onHome1393IconClick}
          />
          <div className="vector-parent">
            <img
              className="vector-icon2"
              alt=""
              src="/vector.svg"
              onClick={onVectorIcon2Click}
            />
            <img
              className="notification-icon"
              alt=""
              src="/26-notification.svg"
              onClick={onNotificationIconClick}
            />
            <img className="frame-child" alt="" src="/ellipse-2@2x.png" />
            <div className="pitch-idea">pitch-idea</div>
            <div className="rectangle" />
          </div>
        </div>
      </div>
      <div className="rectangle-parent" onClick={onGroupContainer5Click}>
        <div className="group-child" />
        <div className="edit-profile">Edit profile</div>
      </div>
      <img className="ellipse-icon" alt="" src="/ellipse-2.svg" />
    </main>
  );
};

export default ProfilePage;
