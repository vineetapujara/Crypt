import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import icon from "../images/icons.png";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons/lib/icons";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link className="link" to="/">
            Crypt.
          </Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined
            style={{
              outline: "none",
              backgroundColor: "none",
              boxShadow: "0px",
              border: "0px",
              transition: "none",
            }}
          />
        </Button>
      </div>
      {activeMenu && (
        <Menu className="menu">
          <Menu.Item className="menu-item" icon={<HomeOutlined />}>
            <Link className="link" to="/">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item className="menu-item" icon={<FundOutlined />}>
            <Link className="link" to="/cryptocurrencies">
              Cryptocurrencies
            </Link>
          </Menu.Item>
          <Menu.Item className="menu-item" icon={<BulbOutlined />}>
            <Link className="link" to="/news">
              News
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
