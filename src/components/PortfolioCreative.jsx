import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import ReactTooltip from "react-tooltip";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import Social from "./Social";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const mobileApp = [
  {
    id: 1,
    name: 'TomYo Skills',
    imgName: 'skills-app.png'
  },
  {
    id: 2,
    name: 'TomYo Skills',
    imgName: 'nft-race.png'
  },
  {
    id: 3,
    name: 'TomYo Skills',
    imgName: 'class-app.png'
  },
  {
    id: 4,
    name: 'TomYo Skills',
    imgName: 'lingo-app.png'
  },
  {
    id: 5,
    name: 'TomYo Skills',
    imgName: 'stoovo-app.png'
  },
  {
    id: 6,
    name: 'TomYo Skills',
    imgName: 'mentor-app.png'
  },
  {
    id: 7,
    name: 'TomYo Skills',
    imgName: 'tomyo-v2-app.png'
  },
  {
    id: 8,
    name: 'TomYo Skills',
    imgName: 'ubp.png'
  },
]

const Portfolio = () => {
  // for popup video for youtube
  const [isOpen, setOpen] = useState(false);

  // for modal details
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  // for modal details method
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
      <Gallery>
        <div className="container">
          <div className="tokyo_tm_portfolio">
            <div className="tokyo_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Portfolio</span>
                  <h3>Highlighed </h3>
                </div>
              </div>
            </div>
            {/* END TOKYO_TM_TITLE */}

            <div className="portfolio_filter">
              <Tabs>
                <TabList>
                  <Tab>Mobile Apps</Tab>
                  <Tab>Web Apps</Tab>
                  <Tab>Others</Tab>
                </TabList>
                {/* END TABLIST */}
                <div className="list_wrapper">
                  <TabPanel>
                      {/* <div className="entry tokyo_tm_portfolio_animation_wrap">
                        <div className="mobile-apps" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                          {mobileApp.map((item, index) => (
                            <img
                              key={index}
                              src={`assets/img/projects/${item.imgName}`}
                              alt={item.name}
                              data-tip
                              data-for="TomYo Skills"
                              style={{ height: 600, padding: 10, paddingBottom: 40, }}
                              onClick={() => setIsOpen3(true)}
                            />
                          ))}
                        </div>
                        <ReactTooltip
                          id="vimeo"
                          place="bottom"
                          type="light"
                          effect="float"
                          className="tooltip-wrapper"
                        >
                        <div>
                          <h5>Teresa Butler</h5>
                          <span>Vimeo</span>
                        </div>
                      </ReactTooltip>
                      </div> */}

                    <Swiper
                      effect={'coverflow'}
                      grabCursor={true}
                      centeredSlides={true}
                      slidesPerView={3.2}
                      coverflowEffect={{
                        rotate: -1,
                        stretch: -20,
                        depth: 50,
                        modifier: 2,
                        slideShadows: false,
                      }}
                      pagination={true}
                      modules={[EffectCoverflow, Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <img src="https://www.puujee.tech/static/media/skills-app.c8926ed5.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="https://www.puujee.tech/static/media/skills-app2.f1a7cd44.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="https://www.puujee.tech/static/media/mentor-app.55feb9d3.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="https://www.puujee.tech/static/media/class-app.9bbdaac5.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="https://www.puujee.tech/static/media/skills-app.c8926ed5.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="https://www.puujee.tech/static/media/skills-app2.f1a7cd44.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="https://www.puujee.tech/static/media/skills-app.c8926ed5.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="https://www.puujee.tech/static/media/skills-app2.f1a7cd44.png" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="https://www.puujee.tech/static/media/skills-app.c8926ed5.png" />
                      </SwiperSlide>
                    </Swiper>
                  </TabPanel>
                  {/* END VIMEO VIDEO */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <img
                              src="assets/img/projects/skills-web.png"
                              className="portfolio_image"
                              alt="Details"
                              data-tip
                              data-for="detail"
                              // style={{ width: 800, paddingRight: 20 }}
                              onClick={toggleModalThree}
                            />

                            <ReactTooltip
                              id="detail"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>TomYo Skills</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END DETAILS */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                          <img
                              src="assets/img/projects/tomyo-landing-page.png"
                              alt="Details"
                              data-tip
                              data-for="detail"
                              // style={{ width: 800, paddingRight: 20 }}
                              onClick={toggleModalThree}
                            />

                            <ReactTooltip
                              id="detail2"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Landing Page</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END DETAILS */}
                    </ul>
                    {/* END DETAILS GALLERY */}
                  </TabPanel>
                  {/* END CREATIVE PORTFOLIO GALLERY */}
                </div>
                {/* END LIST WRAPPER */}
              </Tabs>
            </div>
          </div>
        </div>
      </Gallery>
      {/* popup vidoe for youtube modal activation */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1gyTUHP6ne8"
        onClose={() => setOpen(false)}
      />

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/6.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Selena Gomez</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/2.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/3.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/7.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Ave Simone</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/5.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/4.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default Portfolio;
