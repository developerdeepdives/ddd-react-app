import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { GetServerSideProps } from "next";
import axios from "axios";
import Layout from "../components/layout";
import { theme } from "./_app";

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const response = await axios.get("https://api.meetup.com/room");
//   return {
//     props: {
//       roomList: response.data,
//     },
//   };
// };

interface Props {
  roomList: {
    name: string;
    description: string;
    creator: string;
    createdTime: string;
    userCount: number;
  }[];
}

const useStyles = makeStyles((theme) =>
  createStyles({
    table: {
      minWidth: 650,
      marginBottom: theme.spacing(4),
    },
  })
);

function createData(
  name: string,
  description: string,
  creator: string,
  createdTime: string,
  userCount: number
) {
  return { name, description, creator, createdTime, userCount };
}

const rows = [
  createData(
    "Frozen yoghurt",
    "testseasedtawsetasetaset",
    "Brain",
    "10-1-2019",
    3
  ),
  createData("test2", "testseasedtawsetasetaset", "Brain", "10-1-2019", 3),
  createData(
    "Frozen yoghurt 3",
    "testseasedtawsetasetaset",
    "Brain",
    "10-1-2019",
    3
  ),
  createData(
    "Frozen yoghurt 4",
    "testseasedtawsetasetaset",
    "Brain",
    "10-1-2019",
    3
  ),
  createData(
    "Frozen yoghurt 5",
    "testseasedtawsetasetaset",
    "Brain",
    "10-1-2019",
    3
  ),
  createData(
    "Frozen yoghurt 6",
    "testseasedtawsetasetaset",
    "Brain",
    "10-1-2019",
    3
  ),
  createData(
    "Frozen yoghurt 7",
    "testseasedtawsetasetaset",
    "Brain",
    "10-1-2019",
    3
  ),
];

export default function SimpleTable({ roomList }) {
  const classes = useStyles();

  return (
    <Layout pageName="Room List">
      <TableContainer className={classes.table}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Creator</TableCell>
              <TableCell align="right">Created Time</TableCell>
              <TableCell align="right">User Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.creator}</TableCell>
                <TableCell align="right">{row.createdTime}</TableCell>
                <TableCell align="right">{row.userCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}
