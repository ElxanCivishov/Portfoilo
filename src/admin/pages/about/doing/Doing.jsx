import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Title from "../../../ui/title/Title";

import { useAboutListener } from "../../../../fetchDahaHooks/AboutContent";
import { deleteAbout } from "../../../../redux/aboutSlice";

import AddModal from "./AddModal";
import EditModal from "./EditModal";

import "./doing.css";

// material uis
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Button } from "@mui/material";

const Doing = () => {
  const dispatch = useDispatch();

  //   set redux aboutSlice store from firebase
  useAboutListener();

  //   fetch data from aboutSlice store
  const abouts = useSelector((state) => state.about.abouts);

  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);

  const [updateData, setUpdateData] = useState("");

  const handleEdit = (item) => {
    setUpdateData(item);
    setEditModal(true);
  };

  return (
    <div style={{ paddingLeft: "20px", marginTop: "50px" }}>
      <Title>What's I am doing</Title>
      <Button
        onClick={() => setAddModal(true)}
        sx={{ m: 2 }}
        size="small"
        variant="contained"
        color="info"
      >
        Add new
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Content</TableCell>
              <TableCell>Create</TableCell>
              <TableCell>Update</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {abouts.map((row, index) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.content}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
                {row.modifiedAt ? (
                  <TableCell>{row.modifiedAt}</TableCell>
                ) : (
                  <TableCell sx={{ paddingLeft: 4 }}>-</TableCell>
                )}
                <TableCell sx={{ width: "200px" }}>
                  <Button
                    onClick={() => handleEdit(row)}
                    sx={{ marginRight: 1 }}
                    size="small"
                    variant="contained"
                    color="info"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(deleteAbout(row.id));
                    }}
                    sx={{ marginRight: 1 }}
                    size="small"
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {editModal && (
        <EditModal setEditModal={setEditModal} updateData={updateData} />
      )}
      {addModal && <AddModal setAddModal={setAddModal} />}
    </div>
  );
};

export default Doing;
