import { DatePicker } from "antd";
import React from "react";

import Layout from "../../Layout/LayoutMain/LayoutMain";

const Dashboard = () => {
  const { RangePicker } = DatePicker;

  const onDateSelect = (date, dateString) => {
    console.log("date", date);
    // console.log("dateString", dateString);

  };

  // console.log("profit", profit);

  return (
    <Layout active="dashboard"  >
      <div className="Container dashboard-container" style={{ margin: "3rem" }}>
        <RangePicker onChange={onDateSelect} style={{ margin: "1rem" }} />
        <h2>Total Profit :</h2>
      </div>
    </Layout>
  );
};

export default Dashboard;
