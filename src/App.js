import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import HomeLight from "./views/all-home-version/HomeLight";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="tokyo_tm_all_wrap">
      <HomeLight />
    </div>
  );
};

export default App;
