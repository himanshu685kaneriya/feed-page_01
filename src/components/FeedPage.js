import "./FeedPage.css";

const FeedPage = ({ menu, group38Id }) => {
  return (
    <div className="feed-page01">
      <div className="status-bar1">
        <div className="div3">11:07</div>
        <div className="icons1">
          <img className="wi-fi-icon1" alt="" src="/wifi.svg" />
          <img className="wi-fi-icon1" alt="" src="/reception.svg" />
          <img className="wi-fi-icon1" alt="" src="/battery.svg" />
        </div>
      </div>
      <div className="feed-page01-inner">
        <div className="rectangle-group">
          <div className="frame-item" />
          <button className="vector-group" id="menu">
            <img className="vector-icon3" alt="" src="/vector.svg" />
            <div className="menu">{menu}</div>
          </button>
          <textarea
            className="hookup-4-startup-container"
            placeholder="Hookup 4 startup"
            id="h4s"
          >
            Hookup 4 startu
            <span className="p">p</span>
          </textarea>
          <button className="meet-up-parent" id={group38Id}>
            <div className="meet-up">Meet Up</div>
            <img className="vector-icon4" alt="" src="/vector.svg" />
          </button>
        </div>
      </div>
      <div className="frame-parent">
        <div className="ellipse-parent">
          <img className="frame-inner" alt="" src="/ellipse-3@2x.png" />
          <div className="aniketnamdev-678-parent">
            <div className="aniketnamdev-678">aniketnamdev_678</div>
            <div className="aniket-namdev">Aniket Namdev</div>
          </div>
        </div>
        <div className="hey-i-am-founder-of-hook-4-parent">
          <div className="hey-i-container">
            <p className="hey">{`hey !                                           `}</p>
            <p className="hey"> i am founder of hook_4 _startup</p>
            <p className="hey">{`                                          `}</p>
          </div>
          <div className="lets-start-to-container">
            <p className="lets-start-to"> lets start to grow with me from my</p>
            <p className="hey"> startup</p>
          </div>
        </div>
        <div className="group-container">
          <div className="rectangle-container">
            <div className="group-item" />
            <div className="hook">hook</div>
          </div>
          <img className="group-icon" alt="" src="/group-14.svg" />
        </div>
      </div>
      <div className="frame-group">
        <div className="ellipse-group">
          <img className="frame-child1" alt="" src="/ellipse-3@2x.png" />
          <div className="himanshukaneriya-123-parent">
            <div className="himanshukaneriya-1231">himanshukaneriya_123</div>
            <div className="himanshu-kaneriya1">Himanshu Kaneriya</div>
          </div>
        </div>
        <div className="i-am-coe-container">
          <p className="hey"> hey !</p>
          <p className="hey">{`I am CEO of hook_4_ startup, I met my school friend   Aashu Namdev ,I share  idea for this application. So that time we decided to make this application. And we could start to work this project. Now, you can see where I am,   `}</p>
        </div>
        <div className="frame-div">
          <div className="rectangle-container">
            <div className="group-item" />
            <div className="hook">hook</div>
          </div>
          <img className="frame-child2" alt="" src="/group-14.svg" />
        </div>
      </div>
      <div className="line-parent">
        <img className="line-icon" alt="" />
        <button className="pitch-idea-parent" id="pitch-idea">
          <div className="pitch-idea1">pitch-idea</div>
          <img className="group-child1" alt="" src="/ellipse-1.svg" />
        </button>
        <button className="home-1393-wrapper" id="home">
          <img className="home-1393-icon1" alt="" src="/home1393.svg" />
        </button>
        <button className="vector-wrapper" id="search">
          <img className="home-1393-icon1" alt="" src="/vector.svg" />
        </button>
        <button className="notification-wrapper" id="notification">
          <img className="home-1393-icon1" alt="" src="/26-notification.svg" />
        </button>
        <button className="ellipse-wrapper" id="profile">
          <img className="group-child2" alt="" src="/ellipse-2@2x.png" />
        </button>
        <div className="rectangle1" />
      </div>
    </div>
  );
};

export default FeedPage;
