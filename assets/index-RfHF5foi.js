import{j as e,r as l}from"./react-eBbB0m8U.js";import{a as k}from"./react-dom-yKM8Rrfl.js";import{s as d}from"./styled-components-Eh3_tKb7.js";import{C as u,O as j,u as b,a as S,H as z}from"./@react-three-4IYaAEVH.js";import{G as v}from"./three-stdlib-cbnQRwKt.js";import{F as x,l as C,i as T,f as P,a as M,b as L,c as A,d as F,e as I,g as O,h as W}from"./@fortawesome-EislH945.js";import{d as $,a as D,b as R,c as H,B as h,C as _,A as E,T as X,e as m,f as G,I as J,g as K,D as V,L as Y,h as Z,i as q,j as Q,k as U,l as ee}from"./@mui-A6Ji_T3K.js";import{S as w,P as y,a as p,M as te}from"./swiper-cZfRCG4H.js";import{n as ie}from"./@emotion-rrwgpZCW.js";import{L as B,B as se}from"./react-router-dom-G97OETm6.js";import{P as re}from"./prop-types-xkV6nphx.js";import"./@babel-3xQx7WiQ.js";import"./scheduler-iwWdm5Ml.js";import"./tslib-cEGwD0My.js";import"./three-XCib9RHR.js";import"./react-use-measure-cxrJcbjI.js";import"./debounce-32gG16RP.js";import"./its-fine-M1EgxJJj.js";import"./react-reconciler-xWoml0bn.js";import"./zustand-x_ChMIfy.js";import"./suspend-react-7rE_FwbT.js";import"./clsx-2Jv0kmJG.js";import"./react-transition-group-VR7Jeded.js";import"./hoist-non-react-statics-MGeNrgoW.js";import"./react-is-cHOZVpRJ.js";import"./stylis-UTZzoVRx.js";import"./react-router-wj-R-BYc.js";import"./@remix-run-fUm9TXMd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();function ne(){const t=()=>{const r=b(v,"/blue_crystals/scene.gltf");return e.jsx(e.Fragment,{children:e.jsx("primitive",{dispose:null,object:r.scene,scale:2.5})})};return e.jsxs(oe,{id:"wrap",children:[e.jsx("div",{className:"left",children:e.jsxs("div",{className:"titleBox",children:[e.jsx("p",{children:"안녕하세요."}),e.jsx("p",{children:"예비 프론트엔드 개발자"}),e.jsxs("p",{children:[e.jsx("span",{children:"최혜진"}),"입니다."]})]})}),e.jsxs(u,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},camera:{fov:50,near:.1,far:100,position:[-4,2,50]},children:[e.jsx("ambientLight",{intensity:20}),e.jsx("spotLight",{intensity:.6,angle:.1,penumbra:2,position:[10,15,10],castShadow:!0}),e.jsx(l.Suspense,{fallback:null,children:e.jsx(t,{})}),e.jsx(j,{autoRotate:!0,enableZoom:!1})]})]})}const oe=d.div`
  display: flex; justify-content: center;
  .left{
    width: 50dvw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 40px;
      .titleBox{
        text-align: left;
        line-height: 68px;
        font-size: 40px;
        margin-bottom: 40px;
        span{margin: 0 8px; font-size: 48px;}
      }
      button{width: 120px;
        background: black;
        color: white;
        font-weight: bold;
        font-size: 16px;
        height: 48px;
        letter-spacing: 2px;}
  }
  canvas{transform: translate(15px,20%); cursor: grab;}
  // 모바일
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    .left{
      width: 100%;
      padding-left: 20dvw;
      position: absolute;
      z-index: 1;
      .titleBox{line-height: unset;
      font-size: 24px;
      margin-bottom: 5%; p{ span{    margin: unset;
        font-size: 28px;}}}}
  }
`;function ae(){return e.jsxs(le,{id:"aboutWrap",children:[e.jsx("div",{className:"left",children:e.jsx("div",{className:"txtBox",children:e.jsxs("div",{className:"topTxtBox",children:[e.jsx("p",{children:"PROJECTS"}),e.jsx("p",{children:"CONTACT"}),e.jsx("p",{children:"HOME"})]})})}),e.jsxs("div",{className:"middle",children:[e.jsxs("div",{className:"strengthBox",children:[e.jsxs("div",{className:"strengthMiddleBox",children:[e.jsxs("div",{className:"strength",children:[e.jsx("div",{className:"iconBox css",children:e.jsx(x,{icon:"fa-brands fa-css3-alt"})}),e.jsx("p",{children:"CSS"})]}),e.jsxs("div",{className:"strength",children:[e.jsx("div",{className:"iconBox js",children:e.jsx(x,{icon:"fa-brands fa-js"})}),e.jsx("p",{children:"JS"})]})]}),e.jsxs("div",{className:"strengthArcBox",children:[e.jsxs("div",{className:"strength tooltip tooltip-open tooltip-left","data-tip":"hello",children:[e.jsx("div",{className:"iconBox html",children:e.jsx(x,{icon:"fa-brands fa-html5"})}),e.jsx("p",{children:"HTML"})]}),e.jsxs("div",{className:"strength tooltip tooltip-open tooltip-left",children:[e.jsxs("div",{className:"iconBox react",children:[e.jsx("button",{className:"btn"}),e.jsx(x,{icon:"fa-brands fa-react"})]}),e.jsx("p",{children:"React"})]})]})]}),e.jsx("div",{className:"circleBg",children:e.jsx("img",{src:"img/Mask group.png",alt:""})}),e.jsxs("div",{className:"charactersBox",children:[e.jsxs("div",{className:"bottomTxtBox",children:[e.jsx("div",{className:"subtxt",children:"프론트엔드 지원자"}),e.jsx("div",{className:"title",children:"최혜진"})]}),e.jsxs("div",{className:"top",children:[e.jsx("div",{className:"iconBox char1",children:e.jsx(x,{icon:"fa-regular fa-face-smile-beam"})}),e.jsx("p",{children:"밝음"})]}),e.jsxs("div",{className:"bot",children:[e.jsx("div",{className:"iconBox char2",children:e.jsx($,{})}),e.jsx("p",{children:"성장"})]})]})]}),e.jsx("div",{className:"right"})]})}const le=d.div`
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
`;function ce(){const[t,r]=l.useState(["국건보","SK케미칼","티켓1번가","스타벅스"]),[o,a]=l.useState(["img/nhis.png","img/skchemicals.png","img/ticketst1.png",""]),[i,s]=l.useState(["https://github.com/jinach0i/CC_NHIS.git","https://github.com/jinach0i/CC-SKChemicals.git","https://github.com/multicampus-team-project/project.git",""]);return e.jsxs(xe,{id:"projectsWrap",children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{className:"top"}),e.jsxs("div",{className:"bottom",children:[e.jsx("div",{className:"titleBox",children:e.jsx("h2",{children:"Experience"})}),e.jsxs("div",{className:"right",children:[e.jsxs("div",{className:"features",children:[e.jsxs("div",{className:"iconBox",children:[e.jsx("div",{className:"icon",children:e.jsx(D,{})}),e.jsx("span",{children:"클론"})]}),e.jsxs("div",{className:"iconBox",children:[e.jsx("div",{className:"icon",children:e.jsx(R,{})}),e.jsx("span",{children:"리뉴얼"})]}),e.jsxs("div",{className:"iconBox",children:[e.jsx("div",{className:"icon",children:e.jsx(H,{})}),e.jsx("span",{children:"1인"})]})]}),e.jsx("div",{className:"subTxtBox",children:e.jsx("p",{children:"기본기를 다지기 위해 기존의 사이트를 참고하여 처음으로 만들어본 사이트입니다."})})]})]})]}),e.jsx("div",{className:"prjBox",children:e.jsx(w,{className:"mySwiper2",slidesPerView:3,spaceBetween:20,pagination:{clickable:!0,type:"progressbar"},modules:[y],children:t.map((c,n)=>e.jsx(p,{children:e.jsx(de,{prjTitle:t[n],imgSrcs:o[n],linkpaths:i[n]})},n))})})]})}function de(t){return e.jsx("div",{className:"prjSlide",children:e.jsxs(B,{to:t.linkpaths,children:[e.jsx("div",{className:"title",children:e.jsx("h2",{children:t.prjTitle})}),e.jsx("div",{className:"thumbs",children:e.jsx("img",{src:t.imgSrcs,alt:""})})]})})}const xe=ie.div`
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
  // 모바일
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    .left{
      .bottom{
        flex-direction: column;
        .titleBox{
          width: 100%; height: 100%; padding: 20px; margin: unset;
          h2{
            font-size: 48px;letter-spacing: normal; word-wrap: unset; line-height: unset;
          }
        } //titlebox end
        .right{
          .features{
            width: 100%; height: auto; margin-bottom: 1%; justify-content: flex-start;
          }
          .subTxtBox{
            width: 100%; height: auto;
            p{letter-spacing: unset;
              line-height: unset; padding: 16px;}
          }
        }
      } //bottom end 
      
    }
}
`;function pe(){return e.jsx(he,{className:"footer footer-center p-10 bg-base-200 text-base-content rounded",children:e.jsx("aside",{children:e.jsx("address",{children:"Copyright © 2023 - All right reserved by 최 혜 진"})})})}const he=d.footer`
  width: 100%; height: 18dvh; position: absolute; bottom: 0; left: 0; right: 0; padding: 16px;

`,me=()=>{const{progress:t}=S();return e.jsx(e.Fragment,{children:e.jsxs(z,{as:"div",center:!0,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e.jsx("span",{className:"canvas-loader"}),e.jsxs("p",{style:{fontSize:14,color:"#F1F1F1",fontWeight:800,marginTop:40},children:[t.toFixed(2),"%"]})]})})};function ge(){const t=()=>{const r=b(v,"/planet/scene.gltf");return e.jsx(e.Fragment,{children:e.jsx("primitive",{disposal:null,object:r.scene,scale:1.5,"position-y":0,"rotation-y":0})})};return e.jsxs(fe,{id:"contactWrap",children:[e.jsxs("div",{className:"top",children:[e.jsx("div",{className:"left",children:e.jsx("p",{children:"끝까지 봐주셔서 감사합니다:D"})}),e.jsx(u,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:e.jsxs(l.Suspense,{fallback:e.jsx(me,{}),children:[e.jsx(j,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e.jsx(t,{})]})})]}),e.jsx(pe,{})]})}const fe=d.div`
display: flex; flex-direction: column; justify-content: space-between;
  .top {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .left{
        width: 50%;
    }
    canvas{width: 50%;}
    
  }
`,ue=360,g=["Projects","Contact"];function N(t){const{window:r}=t,[o,a]=l.useState(!1),i=()=>{a(n=>!n)},s=e.jsxs(h,{onClick:i,sx:{textAlign:"center"},children:[e.jsx(m,{variant:"h6",sx:{my:2}}),e.jsx(Y,{children:g.map(n=>e.jsx(Z,{disablePadding:!0,children:e.jsx(q,{sx:{textAlign:"center"},children:e.jsx(Q,{primary:n})})},n))})]}),c=r!==void 0?()=>r().document.body:void 0;return e.jsxs(h,{sx:{display:"flex"},children:[e.jsx(_,{}),e.jsx(E,{component:"nav",position:"fixed",sx:{backgroundColor:"transparent",color:"black",boxShadow:"none"},children:e.jsxs(X,{sx:{justifyContent:"space-between",padding:"0 16px !important"},children:[e.jsx("h1",{style:{paddingTop:"16px"},children:e.jsx(B,{to:"/",children:e.jsx("img",{src:"img/chj-high-resolution-logo-black-transparent.png",alt:"로고",style:{maxHeight:"48px"}})})}),e.jsx(m,{variant:"h6",component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}}}),e.jsx(h,{sx:{display:{xs:"none"}},children:g.map(n=>e.jsx(G,{className:"text-black",children:n},n))}),e.jsx(J,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:i,children:e.jsx(K,{})})]})}),e.jsx("nav",{children:e.jsx(V,{container:c,variant:"temporary",open:o,onClose:i,ModalProps:{keepMounted:!0},sx:{display:{xs:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:ue}},children:s})})]})}N.propTypes={window:re.func};function f(){return e.jsx(je,{id:"asideBar",children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsxs("a",{className:"email",href:"#",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx(U,{})]})}),e.jsx("li",{children:e.jsxs("a",{className:"github",href:"#",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{}),e.jsx(ee,{})]})})]})})}const je=d.div`
position: fixed;
z-index: 1;
right: 0;
top: 0;
height: 100%;
display: flex;
align-items: center;
  ul {
    li {
      a {
        color: #000;
        display: inline-block;
        width: 42px;
        height: 42px;
        line-height: 42px;
        margin: 0 auto;
        text-align: center;
        position: relative;
        overflow: hidden;
        opacity: 0.99;
        border-radius: 28%;
        -webkit-transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
        transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
        svg {
          font-size: 34px;
          vertical-align: middle;
          -webkit-transform: scale(0.8);
          transform: scale(0.8);
          -webkit-transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
          transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
        }
      }
      a::before {
        content: "";
        width: 120%;
        height: 120%;
        position: absolute;
        top: 90%;
        left: -110%;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
        transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
      }
      a.email::before {
        background-color: #4caf50;
      }
    }
    li:first-child {
      margin-bottom: 10px;
    }
  }

  ul.snsBox li a:hover svg {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  ul.snsBox .email:hover svg {
    color: #4caf50;
  }
`,be=d.div`
.cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 2.5rem;
    height: 2.5rem;
    z-index: 2;
    pointer-events: none;
  }
  .cursor div {
    position: absolute;
    display: grid;
    place-items: center;
  }
  .cursor div div {
    border: 1px solid #fff;
    border-radius: 50%;
    animation: pulse 2.5s linear infinite;
    box-shadow: 0 0 50px 5px #d7abff6e;
  }
  .cursor div:nth-child(1),
  .cursor div:nth-child(2) {
    width: 100%;
    height: 100%;
  }
  .cursor div:nth-child(1) {
    transition: transform 0.2s ease-out;
  }
  .cursor div:nth-child(2) {
    transition: transform 0.1s ease-out;
  }
  .cursor div:nth-child(2) div {
    background: #fff;
    border-radius: 50%;
    width: 4px;
    height: 4px;
  }
`;function ve(){const[t,r]=l.useState({x:0,y:0}),o=a=>{r({x:a.clientX,y:a.clientY})};return e.jsxs(be,{id:"cursor",className:"cursor",children:[e.jsx("div",{className:"ring",style:{transform:`translateX(calc(${t.x}px - 1.25rem)) translateY(calc(${t.y}px - 1.25rem))`},onMouseMove:o,children:e.jsx("div",{})}),e.jsx("div",{className:"ring",style:{transform:`translateX(calc(${t.x}px - 1.25rem)) translateY(calc(${t.y}px - 1.25rem))`},onMouseMove:o,children:e.jsx("div",{})})]})}function we(){const t=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(ve,{}),e.jsx(N,{}),e.jsx(f,{}),e.jsxs(w,{ref:t,direction:"vertical",slidesPerView:1,spaceBetween:30,mousewheel:!0,pagination:{clickable:!0,dynamicBullets:!0},modules:[te,y],className:"mySwiper",children:[e.jsx(p,{children:e.jsx(ne,{})}),e.jsx(p,{children:e.jsx(ae,{})}),e.jsx(p,{children:e.jsx(ce,{})}),e.jsx(p,{children:e.jsx(ge,{})})]}),e.jsx(f,{})]})}C.add(T,P,M,L,A,F,I,O,W);k.createRoot(document.getElementById("root")).render(e.jsx(se,{children:e.jsx(we,{})}));
