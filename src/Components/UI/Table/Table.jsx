import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#238b94",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
  uno,
  dos,
  tres,
  cuatro
) {
  return { name, calories, fat, carbs, protein, uno, dos, tres, cuatro };
}

const rows = [
  createData(),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
  createData(""),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 100 }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Portfolio Entry</StyledTableCell>
            <StyledTableCell align="right">PortFolio Weigth</StyledTableCell>
            <StyledTableCell align="right">Team 1</StyledTableCell>
            <StyledTableCell align="right">Team 2</StyledTableCell>
            <StyledTableCell align="right">Team 3</StyledTableCell>
            <StyledTableCell align="right">Team 4</StyledTableCell>
            <StyledTableCell align="right">Team 5</StyledTableCell>
            <StyledTableCell align="right">Team 6</StyledTableCell>
            <StyledTableCell align="right">Team 7</StyledTableCell>
            <StyledTableCell align="right">Team 8</StyledTableCell>
            <StyledTableCell align="right">Champ Game Points</StyledTableCell>
            <StyledTableCell align="right">Paid?</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell
                component="th"
                scope="row"
              >
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
