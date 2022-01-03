import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import DepositTable from "../deposit/DepositTable";
import WIthdrawalTable from "../withdrawal/WIthdrawalTable";

const Panel = (props) => {
  const { children, value, index } = props;
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ mt: 4 }}>{children}</Box>}
    </div>
  );
};

const TransactionTabs = () => {
  const [index, setIndex] = useState(0);

  const onIndexChange = (event, indexValue) => {
    setIndex(indexValue);
  };

  return (
    <Box>
      <Box>
        <Tabs value={index} onChange={onIndexChange}>
          <Tab label="Withdraws" />
          <Tab label="Deposits" />
        </Tabs>
      </Box>
      <Panel value={index} index={0}>
        <WIthdrawalTable />
      </Panel>
      <Panel value={index} index={1}>
        <DepositTable />
      </Panel>
      <Box sx={{ mt: 10 }}>
        <Typography variant="caption">
          All Rights Reserved © CoinSignalPro 2022
        </Typography>
      </Box>
    </Box>
  );
};

export default TransactionTabs;
