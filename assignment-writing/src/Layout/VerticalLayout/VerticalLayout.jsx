import React, { useState } from "react";
import { Dropdown, Layout, Menu } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import {
    LogoutOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import MainMenu from "../MainMenu/MainMenu";
import './VerticalLayout.css'
import Item from "antd/es/list/Item";

const VerticalLayout = ({ children, active }) => {
    const { Header, Sider, Content } = Layout;
    const navigate = useNavigate();

    // toggle
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed(!collapsed);
    };
    const performSignOut = () => {
        localStorage.clear();
        navigate.push("/login");
    };


    const menu = (
        <Menu>
            <Menu.Item icon={<LogoutOutlined />} onClick={performSignOut}>
                Logout
            </Menu.Item>
        </Menu>
    );
    return (
        <>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}
                    width={250}
                    style={{
                        height: "100vh",
                        position: "fixed",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        background: "#828b6b",
                    }}
                >
                    <div className="demo-logo-vertical" />
                    <MainMenu active={active} />
                </Sider>
                <Layout className="site-layout"
                    style={{
                        padding: 0,
                        // position: "fixed",
                        width: "100%",
                        marginLeft: collapsed ? 80 : 240
                    }}
                >
                    <Header
                        style={{
                            zIndex: 1,
                            position: "fixed",
                            width: "100%",
                            backgroundColor: "#828b6b"
                        }}
                        className="header-row"
                    >
                        <div style={{ backgroundColor: "#828b6b", display: "flex", alignItems: "center", width: "100%", }}>
                            {React.createElement(
                                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                                {
                                    className: "trigger",
                                    onClick: toggle,
                                }
                            )}
                            <h3 style={{ color: 'white' }}> AL Izzah Electric Sanitary and Paint </h3>

                        </div>

                    </Header>
                    <div className="logout">
                        <Dropdown
                            menu={menu}
                            trigger={["click"]}
                            placement={"bottomLeft"}
                        >
                            <span className="header-action">
                                <IoIosArrowDown />
                            </span>
                        </Dropdown>
                    </div>
                    <Content
                        style={{ padding: "24px", height: "auto" }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default VerticalLayout