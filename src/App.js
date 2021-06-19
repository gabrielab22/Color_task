import './App.css';
import React, { useState } from "react";
import styled from 'styled-components';
import { Button } from 'react-bootstrap';


const App = () => {

  const [colorList, setColorList] = useState([]);

  const [activeColor, setActiveColor] = useState(0);
  const randomColorURL = `https://www.colr.org/json/color/random`;

  const onGetRandomColorHandler = () => {

    fetch(randomColorURL, {
      cache: "no-store"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.new_color)
        setColorList([...colorList, data.new_color])
        setActiveColor(activeColor + 1);
      });
  }



  return (
    <div className="App">
      <header className="App-header">
        <List>
          {colorList.map((color, index) => <ListItem class="active" key={index} color={color} />)}

        </List>
        <Button onClick={onGetRandomColorHandler} variant="primary" size="lg"> Click</Button>{' '}
        <Button variant="secondary" size="sm">Up</Button>{' '}
        <Button variant="secondary" size="sm">Down</Button>{' '}

      </header>
    </div >
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
