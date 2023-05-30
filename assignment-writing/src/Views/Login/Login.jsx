import { useState } from "react";
import { Button, Radio, Input, Typography, Form, notification } from "antd";
import { useNavigate } from "react-router-dom";
import Item from "antd/es/list/Item";


const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const AdminCredential = {
    email: 'admin@gmail.com',
    password: '12345678'
  }

  const Login = async (values) => {
    setLoading(true);
    if (values.email === AdminCredential.email && values.password === AdminCredential.password) {
      await localStorage.setItem("LoggedIn", true)
      navigate.push("/")
      notification.success({
        message: 'Login Succussfully!!',
        duration: 3
      })
    } else {
      notification.error({
        message: 'Wrong Email & Password',
        description: 'Input Correct Email & Password',
        duration: 3
      })
    }
    setLoading(false);
  };

  if (localStorage.hasOwnProperty("LoggedIn")) {
    return navigate("/");
  } else {
    return (
      <div className="temp-login-main">
        <div className="login-main">
          <p>Welcome Back</p>
          <Typography.Title level={2}>
            Login to your account
          </Typography.Title>
          <Form layout="vertical" onFinish={Login}>
            <Item
              name="email"
              label="Email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input className="primary-input" />
            </Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Password is required",
                },
              ]}
            >
              <Input className="primary-input" type="password" />
            </Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "15px 0",
              }}
            >
              {/* <Link to="/forget-password" style={{ color: "black" }}>
              Forgot Password?
            </Link> */}
            </div>
            <Form.Item>
              <Button
                type="primary"
                className="primary-btn"
                loading={loading}
                htmlType="submit"
              >
                Login now
              </Button>
            </Form.Item>
          </Form>

        </div>
      </div>
    );
  };
};

export default Login;