import { Menu, theme } from 'antd';
import './MainMenu.css'
import { FiUsers } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from 'react-router-dom';

const MainMenu = ({ active }) => {
    const { SubMenu } = Menu;
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div>
            <Menu
                theme="dark"
                mode={"inline"}
                defaultSelectedKeys={active ? active : "dashboard"}
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
        </div>
    );
};
export default MainMenu;