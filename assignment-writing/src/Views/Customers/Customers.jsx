import React, { useState, useEffect } from "react";
import { Button, Col, Input, Row, Select, Tooltip } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";


import Layout from "../../Layout/LayoutMain/LayoutMain";

const Customers = () => {
  

  return (
    <Layout active="customers">
      <div className="PL-container Container">
        <h2 className="heading">Customer List</h2>
        <div className="Actions-div">
          <br />

          <div className="Add-btns">
            <Button
              icon={<PlusOutlined />}
              className="secondary-btn"
              style={{ marginRight: "10px" }}
            >
              Add Customer
            </Button>
          </div>
          <br />
        </div>
      </div>
    </Layout>
  );
};

export default Customers;
