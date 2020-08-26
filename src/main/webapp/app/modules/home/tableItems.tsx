import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from "@material-ui/core"
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

export default function TableItems(props: ItemProps) {
  const { list, state, onStateChange } = props
  
  const updateSaleState = (sale, newState) => {
    onStateChange({ ...sale, state: newState })
  }

  return (
    <Table aria-label="simple table">
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
                <Button variant="outlined" color="primary" onClick={() => updateSaleState(row, 'SHIPPED')}>
                  Enviar
                </Button>
              ) : state === 'SHIPPED' ? (
                <Button variant="contained" color="primary" onClick={() => updateSaleState(row, 'DELIVERED')}>
                  Entregar
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