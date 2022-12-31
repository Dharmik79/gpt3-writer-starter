import Head from "next/head";
import Image from "next/image";
import buildspaceLogo from "../assets/buildspace-logo.png";
import { useState } from "react";
const Home = () => {
  const [input, setInput] = useState("");

  const handleClick = () => {

    console.log("Cliked")
  };

  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer </title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Let's build</h1>
          </div>
          <div className="header-subtitle">
            <h2>Writer</h2>
          </div>
        </div>
      </div>
      <div style={{ flexDirection: "row" }}>
        <div>
          <textarea
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            style={{
              flex: 1,
              height: "50vh",
              width: "100vh",
              backgroundColor: "black",
              color: "white",
              padding: "15px",
              fontWeight: "600",
              fontSize: "20px",
              borderRadius: 10,
            }}
            placeholder="Write Something"
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          {input && <button
            style={{
              padding: "10px",
              backgroundColor: "#c85000",
              borderRadius:20
            }}
            onClick={handleClick}
          >
            Generate
          </button>}
        </div>
      </div>
    </div>
  );
};

export default Home;
