import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SingupPage.css";

const SingupPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/feed-page");
  }, [navigate]);

  const onLogInClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="singup-page01" data-animate-on-scroll>
      <header className="sign-up-wrapper" img data-animate-on-scroll>
        <div className="sign-up">
          <p className="blank-line">&nbsp;</p>
          <p className="blank-line">Sign-up</p>
        </div>
      </header>
      <input
        className="singup-page01-child"
        value="username"
        placeholder="username"
        type="text"
      />
      <input
        className="singup-page01-item"
        name="email"
        value="email"
        placeholder="email"
        type="text"
      />
      <input
        className="singup-page01-inner"
        value="password"
        placeholder="password "
        type="text"
      />
      <button
        className="make-new-account-wrapper"
        id="make"
        onClick={onFrameButtonClick}
      >
        <div className="make-new-account">{`Make New Account `}</div>
      </button>
      <div className="already-havea-an-account-parent">
        <div className="already-havea-an">{`Already  havea  an account ?   `}</div>
        <a className="log-in" onClick={onLogInClick}>
          Log in
        </a>
      </div>
    </div>
  );
};

export default SingupPage;
