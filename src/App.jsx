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
import { Mousewheel, Pagination, HashNavigation } from "swiper/modules";
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
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Mousewheel, Pagination, HashNavigation]}
        className="mySwiper"
      >
        <SwiperSlide data-hash="home">
          <Home />
        </SwiperSlide>
        <SwiperSlide data-hash="about">
          <About />
        </SwiperSlide>
        <SwiperSlide data-hash="projects">
          <Projects />
        </SwiperSlide>
        <SwiperSlide data-hash="contact">
          <Contact />
        </SwiperSlide>
      </Swiper>
      <Routes>
        <Route path="/Portfolio/" element={<Home />}></Route>
        <Route path="/Portfolio/about" element={<About />}></Route>
        <Route path="/Portfolio/projects" element={<Projects />}></Route>
        <Route path="/Portfolio/contact" element={<Contact />}></Route>
      </Routes>
      <Asidebar />
    </>
  );
}
