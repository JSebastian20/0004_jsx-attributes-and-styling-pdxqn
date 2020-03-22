import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1
      id="heading"
      // contentEditable="true"
      // spellCheck="true"
    >
      My Favourite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <div>
      <img src="https://picsum.photos/200/300?random=1" alt="random image" />
      <img src="https://picsum.photos/200/300?random=2" alt="random image" />
      <img src="https://picsum.photos/200/300?random=3" alt="random image" />
    </div>
  </div>,
  document.getElementById("root")
);
