import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import "./plan.css";
import BasicPlan from "./BasicPlan";
import BronzePlan from "./BronzePlan";
import SliverPlan from "./SliverPlan";
import GoldPlan from "./GoldPlan";
import PlatinumPlan from "./PlatinumPlan";

const TabPanel = ({ children, value, index }) => {
  return <Box>{value === index && <Box sx={{ p: 3 }}>{children}</Box>}</Box>;
};

const Plan = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="plan">
        <div className="plan__container">
          <div className="plan__title">
            <h1 className="fw-bolder">Choose your Prefered Plan</h1>
            <p>
              Choose your plans and increase your mining speed and make more
              coins!
            </p>
          </div>
        </div>
      </div>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          centered
        >
          <Tab
            label="Basic"
            sx={{ color: "#000", textTransform: "uppercase" }}
          />
          <Tab
            label="Bronze"
            sx={{ color: "#000", textTransform: "uppercase" }}
          />
          <Tab
            label="Sliver"
            sx={{ color: "#000", textTransform: "uppercase" }}
          />
          <Tab
            label="Gold"
            sx={{ color: "#000", textTransform: "uppercase" }}
          />
          <Tab
            label="Platinum"
            sx={{ color: "#000", textTransform: "uppercase" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BasicPlan />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BronzePlan />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SliverPlan />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <GoldPlan />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <PlatinumPlan />
      </TabPanel>
    </>
  );
};

export default Plan;
