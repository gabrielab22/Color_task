import './App.css';
import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const FetchBtn = styled.button`
  background-color: ${({ activeColor }) => "#" + activeColor};
  display: block;
  width: auto;
  height: auto;
  padding: 5px;
  border-radius: 5px;
`;


const App = () => {

  const [colorList, setColorList] = useState([]);
  const [activeColor, setActiveColor] = useState(-1);
  const randomColorURL = `https://www.colr.org/json/color/random`;

  const onGetRandomColorHandler = () => {

    fetch(randomColorURL, {
      cache: "no-store"
    })
      .then(res => res.json())
      .then(data => {
        if (!colorList.includes(data.new_color) && data.new_color !== "") {
          setColorList([...colorList, data.new_color])
          setActiveColor(activeColor && activeColor !== colorList.length - 1 ? colorList.length : activeColor + 1)
        };
      });
  }

  const upBtn = () => {
    if (activeColor > 0) {
      setActiveColor(activeColor - 1)
    }
  }

  const downBtn = () => {
    if (activeColor < colorList.length - 1) {
      setActiveColor(activeColor + 1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <FetchBtn
          onClick={onGetRandomColorHandler}
          activeColor={colorList[activeColor]}
        >
          {colorList.length ? colorList[activeColor] : 'Click me'}
        </FetchBtn>
        <Button onClick={upBtn} variant="secondary" size="sm">Up</Button>
        <Button onClick={downBtn} variant="secondary" size="sm">Down</Button>
        <List>
          {colorList.map((color, index) =>
            <ListItem
              key={index}
              color={color}
              setActiveColor={() => setActiveColor(index)}
              className={activeColor === index ? 'active-color' : ''} />
          )}

        </List>

      </header>
    </div >
  );
}

const ListColors = styled.div`
  display: flex;
  flex-direction: column;
`;
const List = ({ children }) => {
  return (
    <ListColors >{children}</ListColors>
  )
};

const ColorBlock = styled.div`
  color: black;
  background-color: ${({color})=> `#${color}`};
  display: block;
  width: auto;
  height: auto;
  padding: 5px;
  border-radius: 5px;
  margin-top: 1rem;
`;

const ListItem = ({ color, className, setActiveColor }) => {

  return (
    <ColorBlock
      color={color}
      className={className}
      onClick={setActiveColor}
    >
      {color}
    </ColorBlock>
  )
};

export default App;
