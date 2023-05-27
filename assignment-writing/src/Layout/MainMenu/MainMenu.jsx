import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import './MainMenu.css'
import { FiUsers } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const MainMenu = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{
                        height: "100vh",
                        background: "var(--sidebar)",
                        paddingTop: "30px",
                    }}
                    items={[
                        {
                            key: 'dashboard',
                            icon: <RiDashboardLine />,
                            label: <Link to="/">Dashboard</Link>,
                        },
                        {
                            key: 'orders',
                            icon: <HiOutlineShoppingBag />,
                            label: <Link to="/orders">Orders</Link>,
                        },
                        {
                            key: 'products',
                            icon: <AiOutlineShoppingCart />,
                            label: <Link to="/products">Products</Link>,
                        },
                        {
                            key: 'customers',
                            icon: <FiUsers />,
                            label: <Link to="/customers">Customers</Link>,
                        },
                    ]}
                    
                />

            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainMenu;