import React from "react";
import Layout from "../components/Layout/Layout";
import TransactionTabs from "../components/transactions/TransactionsTabs";

const TransactionsPage = () => {
  return (
    <Layout>
      <TransactionTabs />
    </Layout>
  );
};

export default TransactionsPage;
