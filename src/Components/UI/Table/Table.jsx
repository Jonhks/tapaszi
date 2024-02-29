import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classes from "./Table.module.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  textAlign: "center",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#572d03",
    color: theme.palette.common.white,
    opacity: 0.9,
    fontSize: 12,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    color: "white",
    border: "2px solid #eaad2b",
    fontWeight: "bold",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#874607",
    color: "white",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#e27d25",
    color: "white",
  },
  "&:last-child td, &:last-child th": {
    // border: 0,
  },
}));

function createData(
  portfolioEntry,
  porfolioweight,
  team1,
  team2,
  team3,
  team4,
  team5,
  team6,
  team7,
  team8,
  score,
  champGamePoint
) {
  return {
    portfolioEntry,
    porfolioweight,
    team1,
    team2,
    team3,
    team4,
    team5,
    team6,
    team7,
    team8,
    score,
    champGamePoint,
  };
}

const rows = [
  createData(
    "Andersen N1",
    "5.625",
    "Fla Atlantic 9",
    "San Diego St5",
    "Duke 4",
    "Winner of Arizona/Missisipi St 11",
    "Labama 1",
    "Kansas St3",
    "Penn St 10",
    "Texas 2",
    "0.0",
    "139"
  ),
  createData(
    "Andersen N1",
    5.625,
    "Fla Atlantic 9",
    "San Diego St5",
    "Duke 4",
    "Winner of Arizona/Missisipi St 11",
    "Labama 1",
    "Kansas St3",
    "Penn St 10",
    "Texas 2",
    "0.0",
    "139"
  ),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
];

export default function CustomizedTables() {
  return (
    <TableContainer
      component={Paper}
      sx={{ backgroundColor: "transparent" }}
    >
      <Table
        sx={{ minWidth: 100, opacity: ".87" }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow className={classes.tableRow}>
            <StyledTableCell>Portfolio Entry</StyledTableCell>
            <StyledTableCell>PortFolio Weigth</StyledTableCell>
            <StyledTableCell>Team1</StyledTableCell>
            <StyledTableCell>Team2</StyledTableCell>
            <StyledTableCell>Team3</StyledTableCell>
            <StyledTableCell>Team4</StyledTableCell>
            <StyledTableCell>Team5</StyledTableCell>
            <StyledTableCell>Team6</StyledTableCell>
            <StyledTableCell>Team7</StyledTableCell>
            <StyledTableCell>Team8</StyledTableCell>
            <StyledTableCell>Score</StyledTableCell>
            <StyledTableCell>Champioship Game Point</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell
                component="th"
                scope="row"
              >
                {row.portfolioEntry}
              </StyledTableCell>
              <StyledTableCell>{row.porfolioweight}</StyledTableCell>
              <StyledTableCell>{row.team1}</StyledTableCell>
              <StyledTableCell>{row.team2}</StyledTableCell>
              <StyledTableCell>{row.team3}</StyledTableCell>
              <StyledTableCell>{row.team4}</StyledTableCell>
              <StyledTableCell>{row.team5}</StyledTableCell>
              <StyledTableCell>{row.team6}</StyledTableCell>
              <StyledTableCell>{row.team7}</StyledTableCell>
              <StyledTableCell>{row.team8}</StyledTableCell>
              <StyledTableCell>{row.score}</StyledTableCell>
              <StyledTableCell
                className={`${i === 0 && classes.green} ${
                  i === 1 && classes.red
                }`}
              >
                {row.champGamePoint}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
