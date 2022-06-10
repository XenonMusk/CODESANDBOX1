import React from "react";
import ReactDOM from "react-dom";
const name = "XENON";
const year = new Date().getFullYear();
ReactDOM.render(
  <div>
    <p>Created By {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
