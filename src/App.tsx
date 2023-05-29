import "./App.css";

import React from "react";
import Header from "./component/Header";
import News from "./component/News";
import styles from "./styles/Home.module.css";
function App() {
  return (
    <div className={styles.home}>
      <Header />
      <News />
      <div></div>
    </div>
  );
}

export default App;
