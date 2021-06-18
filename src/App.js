import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Button } from 'react-bootstrap';





const App = () => {

  const [colorList, setColorList] = useState([
    "66504c",
    "dcd8d7",
    "008000"
  ]);

  const [activeColor, setActiveColor] = useState(0);


  const onGetRandomColorHandler = () => {

    setColorList([...colorList, "800000"])
    setActiveColor(activeColor + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <List>
          {colorList.map((color, index) => <ListItem key={index} color={color} active />)}

        </List>
        <Button onClick={onGetRandomColorHandler} variant="primary" >Click to change color</Button>{' '}
      </header>
    </div>
  );
}

const List = ({ children }) => {

  return (
    <div >{children}</div>
  )
};

const ListItem = ({ color, active }) => {

  return (
    <div style={{ color: "#" + color }}>{color}</div>
  )
};

// const styles = {
//   container: {
//     display: "block",
//     justifyContent: "center",
//     width: "300px",
//     height: "300px",
//     backgroundColor: "#44ddff"
//   }
// }

export default App;
