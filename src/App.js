import React from "react";
import "./styles.css";
import MyTable from "./MyTable";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.h1
        className="fontFamily text-info"
        initial={{ opacity: 0.2, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "40px" }}
      >
        React Data Filter Table
      </motion.h1>
      <MyTable />
      <div>
        <motion.p
          className="fontFamily text-info"
          initial={{ opacity: 0.2, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: "initial" }}
        >
          Doc Will Be Available Soon. please share feedbacks
        </motion.p>
      </div>
    </div>
  );
}

export default App;
