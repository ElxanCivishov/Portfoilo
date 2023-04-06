import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Title from "../../../ui/title/Title";

// material uis
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

import AddModal from "./AddModal";
import EditModal from "./EditModal";

import { MdEdit, MdDelete } from "react-icons/md";

import "./doing.css";
import { useAboutDoingListener } from "../../../../fetchDataHooks/AboutContent";
import { deleteDoing } from "../../../../redux/aboutDoingSlice";
import { auth } from "../../../../config/Firebase";

const Doing = () => {
  //   fetch data from aboutSlice store
  const doingItems = useSelector((state) => state.doing.doingItems);

  const dispatch = useDispatch();

  useAboutDoingListener();

  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);

  const [editData, setEditData] = useState("");

  const handleEdit = (data) => {
    setEditData(data);
    setEditModal(true);
  };

  return (
    <div style={{ paddingLeft: "20px", marginTop: "50px" }}>
      <Title>What's I am doing</Title>
      {console.log(doingItems)}
      <Button
        onClick={() => setAddModal(true)}
        sx={{ m: 2 }}
        size="small"
        variant="contained"
        color="info"
      >
        Add doing
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Icon</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Content</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Updated</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doingItems &&
              doingItems.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    <img
                      src={row.imageUrl}
                      alt={row.title}
                      width={30}
                      height={30}
                    />
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.content}</TableCell>
                  <TableCell>{row.createdAt}</TableCell>

                  {row.modifiedAt ? (
                    <TableCell>{row.modifiedAt}</TableCell>
                  ) : (
                    <TableCell sx={{ paddingLeft: 4 }}>-</TableCell>
                  )}

                  {row.uid === auth.currentUser.uid && (
                    <TableCell sx={{ width: "200px" }}>
                      <Button
                        onClick={() => handleEdit(row)}
                        sx={{ marginRight: 1 }}
                        size="small"
                        variant="contained"
                        color="info"
                      >
                        <MdEdit />
                      </Button>
                      <Button
                        onClick={() => {
                          dispatch(
                            deleteDoing({
                              id: row.docId,
                              imageUrl: row.imageUrl,
                            })
                          );
                        }}
                        sx={{ marginRight: 1 }}
                        size="small"
                        variant="contained"
                        color="error"
                      >
                        <MdDelete />
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {editModal && (
        <EditModal setEditModal={setEditModal} editData={editData} />
      )}
      {addModal && <AddModal setAddModal={setAddModal} />}
    </div>
  );
};

export default Doing;
