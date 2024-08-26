import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Home from "../../components/Home";
import About from "../../components/about/AboutMain";
import News from "../../components/News";
import Contact from "../../components/Contact";
import PageTitle from "../../components/PageTitle";
import Experience from "../../components/service/Experience";
import Portfolio3 from "../../components/Portfolio3";

const HomeLight = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedTab]);

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem("isDarkModeEnabled", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <PageTitle title="Purevsuren (Puujee)" />
      {/* End page title for seo */}
      

      <Tabs selectedIndex={selectedTab} onSelect={setSelectedTab}>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div className="leftpart_inner">
              {/* END LOGO */}

              <div className="menu">
                <ul>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/setting.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">Experience</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Projects</span>
                  </Tab>
                  {/* <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/paper.svg"
                      alt="paper"
                    />
                    <span className="menu_content">Blog</span>
                  </Tab> */}
                  {/* <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/mail.svg"
                      alt="mail"
                    />
                    <span className="menu_content"> Contact</span>
                  </Tab> */}
                </ul>
              </div>
              {/* END MENU */}

              {/* <CopyRight /> */}
              {/* END COPYRIGHT */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <TabPanel>
                <div data-aos="fade-right" data-aos-duration="500">
                  <Home />
                </div>
              </TabPanel>
              {/* END HOME MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  <About />
                </div>
              </TabPanel>
              {/* END ABOUT MENU TAB CONTENT */}

              <TabPanel>
                <div
                  // data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-delay="100"
                >
                  {/* <ServiceMain /> */}
                  <Experience />
                </div>
              </TabPanel>
              {/* END ABOUT MENU TAB CONTENT */}

              <TabPanel>
                {/* <Portfolio /> */}
                {/* <Portfolio2 /> */}
                <Portfolio3 />
              </TabPanel>
              {/* END PORTFOLIO MENU TAB CONTENT */}

              <TabPanel>
                <News />
              </TabPanel>
              {/* END NEWS MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  <Contact />
                </div>
              </TabPanel>
              {/* END CONTACT MENU TAB CONTENT */}
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeLight;
