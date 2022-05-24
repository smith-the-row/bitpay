import React, { useState, useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import moment from "moment";

// import firebase function
import { collection, onSnapshot } from "firebase/firestore";
import { store } from "../../firebase";

// import context
import { UserContext } from "../../context/UserContext";

const WIthdrawalTable = () => {
  const { user } = useContext(UserContext);
  const [withdrawals, setWithdrawals] = useState([]);

  useEffect(() => {
    const fetchWithdraws = async () => {
      try {
        const collectionRef = collection(
          store,
          "users",
          `${user.email}`,
          "withdrawal"
        );
        onSnapshot(collectionRef, (docs) => {
          docs.forEach((d) => {
            setWithdrawals((prevState) => [...prevState, d.data()]);
          });
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchWithdraws();
  }, [user.email]);

  return (
    <TableContainer component={Paper} sx={{ mt: 6 }}>
      {withdrawals.length > 0 ? (
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Amount</TableCell>
              <TableCell>Payment Mode</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {withdrawals.map((withdraw, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {withdraw.amount}
                </TableCell>
                <TableCell>{withdraw.method}</TableCell>
                <TableCell>
                  {withdraw.approved ? "Approved" : "Pending"}
                </TableCell>
                <TableCell>
                  {moment(withdraw.date.at).format("YYYY/MM/DD")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography variant="body1" component="div" sx={{ p: 2 }}>
          Currently No Withdrawals
        </Typography>
      )}
    </TableContainer>
  );
};

export default WIthdrawalTable;
