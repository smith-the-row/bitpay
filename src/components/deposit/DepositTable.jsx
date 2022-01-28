import React, { useState, useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import moment from "moment";
import { toast } from "react-toastify";

// import firebase function
import { collection, onSnapshot } from "firebase/firestore";
import { store } from "../../firebase";

// import context
import { UserContext } from "../../context/UserContext";

const DepositTable = () => {
  toast.configure();
  // state to manage the state of the deposit array
  const [deposits, setDeposits] = useState([]);

  // get the user from the user context
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchDeposit = async () => {
      try {
        const collectionRef = collection(
          store,
          "users",
          `${user.email}`,
          "Deposits"
        );

        // const data = await getDocs(collectionRef);
        onSnapshot(collectionRef, (doc) => {
          doc.forEach((d) => {
            setDeposits((prevState) => [...prevState, d.data()]);
          });
        });
      } catch (error) {
        toast.error("Please Refresh Browser", {
          theme: "colored",
          position: "bottom-center",
        });
      }
    };

    fetchDeposit();
  }, [user.email]);

  return (
    <TableContainer component={Paper} sx={{ mt: 6 }}>
      {deposits.length > 0 ? (
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
            {deposits.map((deposit) => (
              <TableRow
                key={deposit.date}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {deposit.amount}
                </TableCell>
                <TableCell>{deposit.method}</TableCell>
                <TableCell>
                  {deposit.approved ? "Approved" : "Pending"}
                </TableCell>
                <TableCell>
                  {moment(deposit.date.at).format("YYYY/MM/DD")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Typography variant="body1" sx={{ p: 2 }} component="div">
          Currently no Deposit
        </Typography>
      )}
    </TableContainer>
  );
};

export default DepositTable;
