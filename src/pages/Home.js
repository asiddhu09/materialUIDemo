import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Img from "../imgs/img1.jpeg";
import "../styles/HeaderStyles.css";

const Home = () => {
  return (
    <Layout>
      <div
        className="home"
        style={{
          backgroundImage: `url(${Img})`,
        }}
      >
        <div className="headerContainer">
          <h1> Tech Demo Website</h1>
          <p>All Techy Things at one Place</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
