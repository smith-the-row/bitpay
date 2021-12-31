import React, { useState, useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import moment from "moment";

// import firebase function
import { collection, onSnapshot } from "firebase/firestore";
import { store } from "../../firebase";

// import context
import { UserContext } from "../../context/UserContext";

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcakes and Marshmellows", 305, 3.7, 67),
  createData("Gingerbread", 356, 16.0, 49),
];

const WIthdrawalTable = () => {
  const { user } = useContext(UserContext);
  const [withdrawals, setWithdrawals] = useState([]);

  const fetchWithdraws = async () => {
    try {
      const collectionRef = collection(
        store,
        "users",
        `${user.email}`,
        "withdraws"
      );
      const userWithdraws = [];
      // const data = await getDocs(collectionRef);
      const unsub = onSnapshot(collectionRef, (docs) => {
        docs.forEach((d) => {
          userWithdraws.push(d.data());
          setWithdrawals(userWithdraws);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWithdraws();
  }, []);

  console.log(withdrawals);

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
                  {moment(withdraw.date.at).format("MMM Do YY")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Skeleton variant="rectangular" width="100%" />
      )}
    </TableContainer>
  );
};

export default WIthdrawalTable;
