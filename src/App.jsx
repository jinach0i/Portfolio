/* eslint-disable*/
import { Home, About, Projects, Contact } from "./pages/Pages";
import Header from "./components/Header";
import Asidebar from "./components/Asidebar";
import Cursor from "./components/Cursor";
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Mousewheel, Pagination, History } from "swiper/modules";
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";

export default function App() {
  const swiperRef = useRef(null);
  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <Cursor />
      <Header />
      <Asidebar />
      <Swiper
        ref={swiperRef}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        history={{
          key: "Portfolio/",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Mousewheel, Pagination, History]}
        className="mySwiper"
      >
        <SwiperSlide data-history="entrance">
          <Home />
        </SwiperSlide>
        <SwiperSlide data-history="about">
          <About />
        </SwiperSlide>
        <SwiperSlide data-history="projects">
          <Projects />
        </SwiperSlide>
        <SwiperSlide data-history="contact">
          <Contact />
        </SwiperSlide>
      </Swiper>
      <Routes>
        <Route path="/entrance" index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Asidebar />
    </>
  );
}
