import React, { useState } from "react";
import { Layout } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";

import MainMenu from "../MainMenu/MainMenu";
import './VerticalLayout.css'

const VerticalLayout = ({ children, active }) => {
    const { Header, Sider, Content } = Layout;

    // toggle
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed(!collapsed);
    };
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
                        <div style={{backgroundColor: "#828b6b", display: "flex", alignItems: "center" ,width: "100%", }}>
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