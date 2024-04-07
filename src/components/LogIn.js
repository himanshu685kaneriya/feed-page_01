import { useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
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

  const onSignUpClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="log-in01">
      <header className="log-in-wrapper" img data-animate-on-scroll>
        <div className="log-in1">log-in</div>
      </header>
      <input
        className="log-in01-child"
        name="email"
        value="email"
        placeholder="email"
        type="text"
      />
      <input
        className="log-in01-item"
        name="password"
        value="password"
        placeholder="password"
        type="text"
      />
      <div className="dontt-have-an">{`Dont’t  have  an account ?   `}</div>
      <Link className="sign-up2" to="/" onClick={onSignUpClick}>
        Sign Up
      </Link>
    </div>
  );
};

export default LogIn;
