// import the useState from the react component to control the state of the modal in the application
import React, { useState, useRef, useContext, useEffect } from "react";
// import the needed components from material ui
import {
  Avatar,
  Box,
  Button,
  Modal,
  Paper,
  Typography,
  Fade,
  Backdrop,
  TextField,
  IconButton,
  Divider,
  Skeleton,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

// import the Fonts from react icons (material icons)
import { MdUpload, MdAddCircle } from "react-icons/md";

// import Font awesome Icons
import { FaUser, FaEnvelope, FaPhone, FaCalendar } from "react-icons/fa";

// import the toast components to display errors
import { toast } from "react-toastify";

// import firebase functions
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { store, bucket } from "../../firebase";

// user context
import { UserContext } from "../../context/UserContext";
import moment from "moment";

// styles for the Upload Picture Modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: 400, xs: 280 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

// styles for the form update Modal
const styleTwo = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 300, md: 500 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

// the component to be Rendered
const Profile = () => {
  // state to control the upload Modal
  const [modalOpen, setModalOpen] = useState(false);
  // state to control the form modal
  const [formModalOpen, setFormModalOpen] = useState(false);
  // details
  const [details, setDetails] = useState(null);

  // user context
  const { user } = useContext(UserContext);

  // navigate hook
  const navigate = useNavigate();

  // set the form refs
  const pictureRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();

  // functions to control the visibility of the modals
  // (functions to control upload modal)
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  // (functions to control form modal)
  const handleFormOpen = () => setFormModalOpen(true);
  const handleFormClose = () => setFormModalOpen(false);

  // function to upload Profile Picture
  const uploadPicture = async () => {
    try {
      const file = pictureRef.current.files[0];

      if (!file) {
        toast.error("Please Select an Image", {
          theme: "colored",
          position: "bottom-center",
        });
      }
      const imgRef = ref(bucket, `profileImg/${file.name}`);
      await uploadBytes(imgRef, file);
      const imgSrc = await getDownloadURL(imgRef);
      // user docRef
      const userRef = doc(store, "/users", `${user.email}`);
      await updateDoc(userRef, {
        profileImg: imgSrc,
      });

      toast.success("Image Uploaded", {
        theme: "colored",
        position: "top-center",
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Could Not Upload Image", {
        theme: "colored",
        position: "bottom-center",
      });
    }
  };

  // function to get User

  // useEffect
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const docRef = doc(store, "/users", `${user.email}`);
        const userDetails = await getDoc(docRef);

        setDetails(userDetails.data());
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserDetails();
  }, [details, user.email]);

  // update User Details
  const updateDetails = async () => {
    try {
      const docRef = doc(store, "/users", `${user.email}`);

      if (!nameRef.current.value | !phoneRef.current.value) {
        return toast("Please fill the form correctly", {
          type: "error",
          position: "bottom-center",
          theme: "colored",
        });
      }

      await updateDoc(docRef, {
        name: nameRef.current.value,
        phone: phoneRef.current.value,
      });

      toast.info("Details have been updated", {
        theme: "colored",
        position: "top-center",
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      // toast.error("Can not Change Details Now", {
      //   theme: "colored",
      //   position: "bottom-center",
      // });
    }
  };

  return (
    <div>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Account Profile Information
        </Typography>
      </Box>
      {details ? (
        <Paper>
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ mb: 2 }}>
              {details ? (
                <Avatar src={details.profileImg} />
              ) : (
                <Skeleton variant="circular" width="100%" height={80} />
              )}
            </Box>
            <Box sx={{ mt: 2 }}>
              {details ? (
                <Typography variant="subtitle1">{details.name}</Typography>
              ) : (
                <Skeleton variant="text" />
              )}
            </Box>
            <Box sx={{ mt: 4 }}>
              <Button
                endIcon={<MdUpload />}
                variant="contained"
                color="primary"
                onClick={handleOpen}
              >
                Upload Picture
              </Button>
            </Box>
          </Box>
        </Paper>
      ) : (
        <Skeleton variant="rectangular" width="100%" height={130} />
      )}

      {details ? (
        <Paper sx={{ mt: 6 }}>
          <Box
            sx={{
              p: 2,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { md: "row", xs: "column" },
            }}
          >
            <Box sx={{ mb: { xs: 2 } }}>
              <Box sx={{ display: "flex" }}>
                <FaUser />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  Name
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1">{details.name}</Typography>
              </Box>
            </Box>
            <Box sx={{ mb: { xs: 2 } }}>
              <Box sx={{ display: "flex" }}>
                <FaEnvelope />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  Email
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1">{details.email}</Typography>
              </Box>
            </Box>
            <Box sx={{ mb: { xs: 2 } }}>
              <Box sx={{ display: "flex" }}>
                <FaPhone />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  Phone Number
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography>{details.phone}</Typography>
              </Box>
            </Box>
            <Box sx={{ mb: { xs: 2 } }}>
              <Box sx={{ display: "flex" }}>
                <FaCalendar />
                <Typography variant="subtitle1" sx={{ ml: 1 }}>
                  Joined
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography>
                  {moment(details.createdAt).format("Do MM YY")}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            color="primary"
            onClick={handleFormOpen}
          >
            Update Details
          </Button>
        </Paper>
      ) : (
        <Skeleton variant="rectangular" width="100%" height={400} />
      )}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="subtitle1"
              component="h2"
              gutterBottom
            >
              Update Profile Picture
            </Typography>
            <TextField
              type="file"
              inputRef={pictureRef}
              sx={{ mt: 2, mb: 3 }}
            />
            <IconButton onClick={uploadPicture}>
              <MdAddCircle />
            </IconButton>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={formModalOpen}
        onClose={handleFormClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={formModalOpen}>
          <Box sx={styleTwo}>
            <Box sx={{ pb: 2 }}>
              <Typography variant="h6" component="h1">
                Edit Profile
              </Typography>
            </Box>
            <Divider />
            <TextField label="Name" inputRef={nameRef} sx={{ mt: 4 }} />
            <TextField
              label="Phone"
              inputRef={phoneRef}
              sx={{ mt: 4, mb: 3 }}
            />
            <Button variant="contained" color="primary" onClick={updateDetails}>
              update
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Profile;
