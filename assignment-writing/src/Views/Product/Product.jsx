import React from "react";
import { Button } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";


import Layout from "../../Layout/LayoutMain/LayoutMain";

const Product = () => {
  

  return (
    <Layout active="Product">
      <div className="PL-container Container">
        <h2 className="heading">Product List</h2>
        <div className="Actions-div">
          <br />

          <div className="Add-btns">
            <Button
              icon={<PlusOutlined />}
              className="secondary-btn"
              style={{ margin: "1rem" }}
            >
              Add Product
            </Button>
          </div>
          <br />
        </div>
      </div>
    </Layout>
  );
};

export default Product;
