import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styled from "@emotion/styled";
import { useState } from "react";
import ContentCutIcon from '@mui/icons-material/ContentCut';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom";
export default function Projects() {
    const [prjTitle, setPrjTitle] = useState(['국건보','SK케미칼','스타벅스','진후레쉬']);
    const [imgSrcs, setImgSrcs] = useState(["src/assets/thumbnhis.png","src/assets/thumbskchemicals.png",'','']);
    const [linkpaths, setLinkpaths] = useState(['','','',''])
  return (
    <PrjWrap id="projectsWrap">
      <div className="left">
        <div className="top"></div>
        <div className="bottom">
          <div className="titleBox">
            <h2>Experience</h2>
          </div>
          <div className="right">
            <div className="features">
              <div className="iconBox">
                <div className="icon"><ContentCutIcon /></div>
                <span>클론</span>
              </div>
              <div className="iconBox">
                <div className="icon"><AutoFixHighIcon /></div>
                <span>리뉴얼</span>
              </div>
              <div className="iconBox">
                <div className="icon"><PersonIcon /></div>
                <span>1인</span>
              </div>
            </div>
            <div className="subTxtBox">
              <p>
              기본기를 다지기 위해 기존의 사이트를 참고하여 처음으로 만들어본 사이트입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="prjBox">
        <Swiper
          className="mySwiper2"
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
            type: "progressbar",
          }}
          modules={[Pagination]}
        >
            {
                prjTitle.map((a,i) => {
                    return(
                        <SwiperSlide key={i}><Prj prjTitle={prjTitle[i]} imgSrcs={imgSrcs[i]} linkpaths={linkpaths[i]} /></SwiperSlide>
                    )
                })
            }
        </Swiper>
      </div>
    </PrjWrap>
  );
}
function Prj(props) {
    return(
        <div className="prjSlide">
            <Link to={props.linkpaths}>
              <div className="title">
                  <h2>{props.prjTitle}</h2>
              </div>
              <div className="thumbs">
                  <img src={props.imgSrcs} alt="" />
              </div>
            </Link>
        </div>
    )
}
const PrjWrap = styled.div`
  display: flex;
  justify-content: space-between;
  .left{
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
    margin-right: 4%;
    .bottom{
        height: 300px; display: flex; justify-content: center; text-align: left;
        .titleBox{
            width: 300px;
            height: 300px;
            padding-left: 20px;   
            margin-right: 20px;
            h2{
                font-weight: bold;
                font-size: 80px;
                letter-spacing: 24px;
                line-height: 100px;
                height: 100%;
                word-wrap: break-word;
            } 
        }
        .right{
            display: flex;
            flex-direction: column;
            justify-content: center;
            .features{ 
                width: 334px; height: 110px; margin-bottom: 42px; display: flex; justify-content: space-between;
                .iconBox{
                    width: 85px;
                    height: 110px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-evenly;
                    .icon{
                        svg{font-size: 48px;}
                    }
                    span{
                        font-weight: bold;
                        height: 30px;
                        border: 2px solid black;
                        border-left: 0;
                        border-right: 0;
                        width: 80px;
                        text-align: center;
                        margin-right: 1px;}
                }
            }
            .subTxtBox{
                width: 330px; height: 104px; overflow: hidden;
                p{font-size: 18px; line-height: 28px; letter-spacing: 10px;}
            }
        }
    }
  }
  .prjBox {
    padding: 0;
    .mySwiper2 {
      width: 690px;
      height: 100%;
      background: none;
      .swiper-slide {
        display: flex; justify-content: center; flex-direction: column;  
            width: 170px !important; align-items: center;
        div{padding: unset;}
        .prjSlide{
            .title{
                height: 230px; text-align: center; padding-top: 25px;
                h2{writing-mode: vertical-lr; font-weight: bold; text-orientation: upright; font-size: 24px;
                    letter-spacing: 10px; margin: 0 auto; }
            }
            .thumbs{height: 370px;  }
        }
      }
      .swiper-pagination-progressbar {
        position: absolute;
        width: 416px;
        height: 2px;
        left: 105px;
        top: unset;
        margin: 11px 0;
        bottom: 26px;

        span::before {
          position: absolute;
          top: -10px;
          right: 0;
          content: "";
          background: #ffffff;
          border: 12px solid snow;
          border-radius: 100%;
          width: 44px;
          height: 12px;
        }
      }
    }
  }
`;
