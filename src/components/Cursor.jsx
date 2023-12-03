import { useState } from 'react';
import styled from 'styled-components';
const CursorWrap=styled.div`
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
`

export default function Cursor() {
        const [position, setPosition] = useState({ x: 0, y: 0 });
      
        const handleMouseMove = (e) => {
          setPosition({ x: e.clientX, y: e.clientY });
        };
  return (
    <CursorWrap id="cursor" className="cursor">
      <div className="ring"  style={{
        transform: `translateX(calc(${position.x}px - 1.25rem)) translateY(calc(${position.y}px - 1.25rem))`,
      }}
      onMouseMove={handleMouseMove}>
        <div></div>
      </div>
      <div className="ring"  style={{
        transform: `translateX(calc(${position.x}px - 1.25rem)) translateY(calc(${position.y}px - 1.25rem))`,
      }}
      onMouseMove={handleMouseMove}>
        <div></div>
      </div>
    </CursorWrap>
  );
}