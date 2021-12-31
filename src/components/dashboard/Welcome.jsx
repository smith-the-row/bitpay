import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, Skeleton } from "@mui/material";
// import Toast
import { toast } from "react-toastify";
// import Firebase functions
import { getDoc, doc } from "firebase/firestore";
// import setter functions
import { store } from "../../firebase";
// user context
import { UserContext } from "../../context/UserContext";

const Welcome = () => {
  toast.configure();
  const { user } = useContext(UserContext);

  // set State for Name
  const [name, setName] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const docRef = doc(store, "/users", `${user.email}`);
        const userDetails = await getDoc(docRef);

        setName(userDetails.data());
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, [user.email]);

  return (
    <Box>
      {name ? (
        <Typography variant="h6" gutterBottom>
          Welcome {name.name}
        </Typography>
      ) : (
        <Skeleton variant="text" />
      )}
    </Box>
  );
};

export default Welcome;
