import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
export default function About() {
  return (
    <AboutWrap id="aboutWrap">
      <div className="left">
        <div className="txtBox">
          <div className="topTxtBox">
            <p>PROJECTS</p>
            <p>CONTACT</p>
            <p>HOME</p>
          </div>
          {/* <div className="bottomTxtBox">
            <div className="title">최혜진</div>
            <div className="subtxt">프론트엔드를 꿈꾸는</div>
          </div> */}
        </div>
      </div>

      <div className="middle">
        <div className="strengthBox">
          <div className="strengthMiddleBox">
            <div className="strength">
              <div className="iconBox css">
                <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
              </div>
              <p>CSS</p>
            </div>
            <div className="strength">
              <div className="iconBox js">
                <FontAwesomeIcon icon="fa-brands fa-js" />
              </div>
              <p>JS</p>
            </div>
          </div>
          <div className="strengthArcBox">
            <div
              className="strength tooltip tooltip-open tooltip-left"
              data-tip="hello"
            >
              <div className="iconBox html">
                <FontAwesomeIcon icon="fa-brands fa-html5" />
              </div>
              <p>HTML</p>
            </div>
            <div className="strength tooltip tooltip-open tooltip-left">
              <div className="iconBox react">
                <button className="btn"></button>

                <FontAwesomeIcon icon="fa-brands fa-react" />
              </div>
              <p>React</p>
            </div>
          </div>
        </div>
        <div className="circleBg">
          <img src="img/Mask group.png" alt="" />
        </div>
        <div className="charactersBox">
          <div className="bottomTxtBox">
          <div className="subtxt">프론트엔드 지원자</div>
            <div className="title">최혜진</div>
          </div>
          <div className="top">
            <div className="iconBox char1">
              <FontAwesomeIcon icon="fa-regular fa-face-smile-beam" />
              {/* <FontAwesomeIcon icon="fa-solid fa-database" /> */}
            </div>
            <p>밝음</p>
          </div>
          <div className="bot">
            <div className="iconBox char2">
              {/* <FontAwesomeIcon icon="fa-brands fa-vuejs" /> */}
              <NaturePeopleIcon />
            </div>
            <p>성장</p>
          </div>
        </div>
      </div>

      <div className="right"></div>
    </AboutWrap>
  );
}
const AboutWrap = styled.div`
  // background-color:#e7e3e387;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
  padding-left: 0 !important;
  .left { 
    padding-left: 160px;
    height: 100%;
    display: flex;
    align-items: center;
    .txtBox {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
      .topTxtBox {
        p {
          font-size: 18px;
          height: 20px;
          line-height: 20px;
        }
      }}
    }
  .middle {
    position: relative;
    display: flex;
    align-items: center;
    .iconBox{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        width: 88px;
        height: 88px;
        line-height: 88px;
        margin: 0 10px;
        text-align: center;
        position: relative;
        overflow: hidden;
        opacity: .99;
        border-radius: 28%;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.05);
        -webkit-transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
        transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
        svg{font-size: 40px;}
    }
    .iconBox.html{
        svg{color: rgb(221,75,37);}
    }
    .iconBox.html:hover{
        background-color: rgb(221,75,37);
        svg{color: white;}
    }
    .iconBox.css{
        svg{color: rgb(37,75,221);}
    }
    .iconBox.css:hover{
        background-color: rgb(37,75,221);
        svg{color: white;}
    }
    .iconBox.js{
        svg{color: rgb(239,216,29);}
    }
    .iconBox.js:hover{
        background-color: rgb(239,216,29);
        svg{color: white;}
    }
    .iconBox.react{
        svg{color: rgb(94,211,243);}
    }
    .iconBox.react:hover{
        background-color: rgb(94,211,243);
        svg{color: white;}
    }
    .iconBox.char1{
        svg{color: rgb(240,217,134);}
    }
    .iconBox.char1:hover{
        background-color: rgb(240,217,134);
        svg{color: white;}
    }
    .iconBox.char2{
        // vue 아이콘색:
        svg{color: rgb(65,184,131);}
    }
    .iconBox.char2:hover{
        background-color: rgb(65,184,131);
        // vue 아이콘색:
        svg{color: white;}
    }
    .iconBox+p{font-size: 18px;
      margin-top: 14px;
      letter-spacing: -1px;}
    .strengthBox {
      height: 500px;
      .strengthMiddleBox {
        position: absolute;
        left: -68px;
        top: 25%;
        .strength:first-child {
          margin-bottom: 40px;
        }

      }
      .strengthArcBox {
        position: relative;
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        top: -40px;
        right: -50px;
      }
    }
    .circleBg {
      width: 500px;
      height: 515px;
      border-radius: 50%;
      background: #daecf1;
    }
    .charactersBox {
      height: 600px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
        .bottomTxtBox{
          position: absolute;
          top: 40px;
          right: -11dvw;
          text-align: left;
          .subtxt{font-size: 24px;
            letter-spacing: 3px;
            margin-bottom: 14px;}
          .title{font-weight: bold;
            font-size: 36px;
            letter-spacing: 8px;}
        }
        .top {
          margin-bottom: 10px;
          transform: translate(80px,-70px);
        }
        .bottom {
            transform: translateX(-40px);
        }
    }
    
  }
  .right {
    width: 200px;
    height: 100%;
  }
  // 큰 태블릿
  @media screen and (max-width: 1439px) {
  }
  // 작은 태블릿
  @media screen and (max-width: 1023px) {
    .middle .charactersBox .bottomTxtBox .title {
    }
    .middle .charactersBox .subtxt {
      font-size: 20px;
    }
    .middle .circleBg {
      width: 400px;
      height: 400px;
    }
  }
  // 모바일
  @media screen and (max-width: 768px) {
    .left .txtBox .topTxtBox p {
      font-size: 16px;
      height: 16px;
      line-height: 16px;
    }
    .left .txtBox .bottomTxtBox .title {
      font-size: 24px;
      height: 24px;
      line-height: 24px;
      letter-spacing: 2px;
    }
    .middle .circleBg {
      width: 200px;
      height: 200px;
    }
  }
`;
