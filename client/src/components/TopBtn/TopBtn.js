import React, { useEffect, useState } from "react";
import "../../app.css";
import { FaLongArrowAltUp } from "react-icons/fa";

function TopBtn() {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 50) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 50) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
  });

  return (
    <FaLongArrowAltUp
      className="scrollTop"
      onClick={scrollTop}
      style={{
        margingBottom: "50px",
        color: "pink",
        height: 40,
        display: showScroll ? "flex" : "none",
      }}
    />
  );
}

export default TopBtn;
