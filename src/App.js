import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import icon from "../src/images/icons.png";
import { Avatar } from "antd";
import {
  HomePage,
  News,
  Cryptocurrencies,
  CryptoDetails,
  Navbar,
} from "./components";
import "./App.css";

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<HomePage />} />

            <Route
              exact
              path="/cryptocurrencies"
              element={<Cryptocurrencies />}
            />
            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route exact path="/news" element={<News />} />
          </Routes>
        </div>
      </Layout>

      <div className="footer">
        <Typography.Title
          level={5}
          style={{
            paddingLeft: "5px",
            left: "5px",
            color: "white",
            textAlign: "center",
          }}>
          <Avatar
            src={icon}
            style={{
              right: "4px",
              fontSize: "10px",
              width: "20px",
              height: "20px",
            }}
          />
          Crypt.
          <br />
        </Typography.Title>

        <Space>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/cryptocurrencies">
            Cryptocurrencies
          </Link>

          <Link className="link" to="news">
            News
          </Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
