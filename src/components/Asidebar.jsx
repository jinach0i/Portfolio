import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import styled from "styled-components";
export default function Asidebar() {
  const handleChange=(e) => {}
  const handleSubmit=(e) => {}
  return (
    <AsideWrap id="asideBar">
      <ul>
        <li>
          <a className="email" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <MailIcon />
          </a>
        </li>
        <li>
          <a className="github" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <GitHubIcon />
          </a>
        </li>
      </ul>
    </AsideWrap>
  );
}
const AsideWrap = styled.div`
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
`;
