import React, { useEffect } from 'react';
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 300,
    maxWidth: 400,
  }
});

function createData(subject: string, testName: string, grade: number, peso: number){
  return { subject, testName, grade, peso };
}

const rows = [
  createData("Calculo 1", "Prova 1", 8, 0.3),
  createData("Calculo 1", "Prova 2", 0, 0.3),
  createData("Calculo 1", "Prova 3", 0, 0.3),
  createData("Calculo 1", "Lista", 0, 0.2),
];

function SubjectTable(){
  const classes = useStyles(); 

  // async function getSubjects(){
  //   await 
  // }
  
  // useEffect(({
  //   getSubjects();
  // }), []);

  function CalcFinalGrade(){

    var soma = 0;

    rows.map(row => {
      soma += (row.grade * row.peso);
    })
    soma = soma/rows.length;
    return soma;
  }

  return(
    <>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Subject-table">
        <TableHead>
          <TableRow>
            <TableCell>Avaliação</TableCell>
            <TableCell align="right">Peso</TableCell>
            <TableCell align="right">Nota</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            <TableRow key={row.subject}>
              <TableCell component="th" scope="row">
                {row.testName}
              </TableCell>
              <TableCell align="right">{row.grade}</TableCell>
              <TableCell align="right">{row.peso}</TableCell> 
            </TableRow>
          })}
          <TableRow>
            <TableCell component="th" scope="row">Nota Final</TableCell>
            <TableCell align="right">-</TableCell>
            <TableCell align="right">{CalcFinalGrade()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}

export default SubjectTable;