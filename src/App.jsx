import {Home,About,Projects,Contact} from './pages/Pages';
import Header from './components/Header';
import Asidebar from './components/Asidebar';
import Cursor from './components/Cursor';
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import { useRef } from 'react';
import { Route, Routes } from 'react-router-dom';

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
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Home /></SwiperSlide>
        <SwiperSlide><About /></SwiperSlide>
        <SwiperSlide><Projects /></SwiperSlide>
        <SwiperSlide><Contact /></SwiperSlide>
      </Swiper>
      {/* <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes> */}
    <Asidebar />
    </>
  );
}
