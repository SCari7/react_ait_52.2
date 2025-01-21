import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Homework01 from "./homework/Homework01";
import Lesson_01 from "./lessons/lesson01/Lesson_01";
import Lesson_02 from "./lessons/lesson02/Lesson02";
import Lesson03 from "./lessons/lesson03/Lesson03";
import Lesson04 from "./lessons/lesson04/Lesson04";

function App() {
  return (
    <>
      {/* <Homework01/> */}

      {/* <Lesson_01/>
      <h1>Vite + React</h1> */}
      {/* <Lesson_02/> */}
      <Lesson03/>
      <Lesson04/>
    </>
  );
}

export default App;
