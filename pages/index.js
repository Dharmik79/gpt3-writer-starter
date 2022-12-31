import Head from "next/head";
import Image from "next/image";
import buildspaceLogo from "../assets/buildspace-logo.png";

const Home = () => {
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
        <div style={{  display: "flex", alignItems:"center",justifyContent:"center",padding:"10px"}}>
          <button style={{  padding:"10px"}}>Generate</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
