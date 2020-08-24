import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { ISales } from 'app/shared/model/sales.model';

type itemList = {
  id: number,
  state: string
}

type ItemProps = {
  list: itemList[],
  state: string,
  onStateChange: (sales: ISales) => void
};

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function TableItems(props: ItemProps) {
  const classes = useStyles();
  
  const { list, state, onStateChange } = props
  
  const updateSaleState = (sale, newState) => {
    onStateChange({ ...sale, state: newState })
  }

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Nro</TableCell>
          <TableCell align="center">Proveedor</TableCell>
          <TableCell align="center">Fecha de entrega</TableCell>
          <TableCell align="center">Pagado</TableCell>
          <TableCell align="center">Pago total</TableCell>
          <TableCell align="center" />
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map((row) => (
          state === row.state &&
          <TableRow key={row.id} hover={true}>
            <TableCell align="center" component="th" scope="row">{row.id}</TableCell>
            <TableCell align="center">Merlion Techs</TableCell>
            <TableCell align="center">26-08-2020</TableCell>
            <TableCell align="center">3300</TableCell>
            <TableCell align="center">4000</TableCell>
            <TableCell align="center">
              {state === 'IN_CHARGE' ? (
                <Button variant="contained" size="medium" color="primary" onClick={() => updateSaleState(row, 'SHIPPED')}>
                  Enviar
                </Button>
              ) : state === 'SHIPPED' ? (
                <Button variant="contained" size="medium" color="primary" onClick={() => updateSaleState(row, 'DELIVERED')}>
                  En camino
                </Button>
              ) : (
                    <Button variant="contained" disabled >
                      Entregado
                    </Button>
                  )
              }
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}