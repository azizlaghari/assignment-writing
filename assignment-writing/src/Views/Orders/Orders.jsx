import React, { useState, useEffect } from "react";
import { Button, Col, Input, Row, Select, Tooltip } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";


import Layout from "../../Layout/LayoutMain/LayoutMain";

const Orders = () => {
  

  return (
    <Layout active="customers">
      <div className="PL-container Container">
        <h2 className="heading">Orders List</h2>
        <div className="Actions-div">
          <br />

          <div className="Add-btns">
            <Button
              icon={<PlusOutlined />}
              className="secondary-btn"
              style={{ margin: "1rem" }}
            >
              Add Orders
            </Button>
          </div>
          <br />
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
