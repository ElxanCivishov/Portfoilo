import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Title from "../ui/title/Title";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import { Button } from "@mui/material";

import profile from "../../images/my-avatar.png";
import { useState } from "react";
import { useProfileListener } from "../../fetchDataHooks/AboutContent";
import { setDarfProfile } from "../../redux/profileSlice";

export default function Profile() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.profile.profile);
  console.log("data", data);
  const [imageUrl, setImageUrl] = useState(data.imageUrl);
  const [fullname, setFullname] = useState(data.fullname);
  const [position, setPosition] = useState(data.position);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  const [birthDay, setBirthDay] = useState(data.birthDay);
  const [address, setAddress] = useState(data.address);

  useProfileListener();

  return (
    <>
      <Title>Profile information</Title>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="profile"
            src={profile}
            sx={{
              width: "100px",
              height: "100px",
              cursor: "pointer",
              border: "1px solid black",
              padding: "1px",
            }}
          />
        </Stack>
        <TextField
          sx={{ mt: 5, outline: "none" }}
          label="Full name"
          variant="standard"
          value={fullname}
          onChange={(e) =>
            dispatch(setDarfProfile({ fullname: e.target.value }))
          }
        />
        <TextField
          sx={{ mt: 5, outline: "none" }}
          label="Position"
          variant="standard"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <TextField
          sx={{ mt: 5, outline: "none" }}
          label="Email"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={{ mt: 5, outline: "none" }}
          label="Phone"
          variant="standard"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          sx={{ mt: 5, outline: "none" }}
          label="Birth day"
          variant="standard"
          value={birthDay}
          onChange={(e) => setBirthDay(e.target.value)}
        />
        <TextField
          sx={{ mt: 5, outline: "none" }}
          label="Location"
          variant="standard"
          value={data.address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          textAlign: "right",
        }}
      >
        <Button
          // onClick={() => setAddModal(true)}
          sx={{ m: 2, mr: 10 }}
          size="small"
          variant="contained"
          color="info"
        >
          Update
        </Button>
      </Box>
    </>
  );
}
