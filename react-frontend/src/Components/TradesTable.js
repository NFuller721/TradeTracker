import { toPrice } from "../Utils/toPrice";

import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";

export const TradesTable = ({ trades }) => (
  <TableContainer className="TradesTable" component={Paper}>
    <Table>
      <TableHead className="TableHead">
        <TableRow>
          <TableCell>Cost</TableCell>
          <TableCell>Fee</TableCell>
          <TableCell>Margin</TableCell>
          <TableCell>Order Type</TableCell>
          <TableCell>Pair</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Direction</TableCell>
          <TableCell>Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(trades)
          .splice(0, 20)
          .map((key, index) => (
            <TableRow>
              <TableCell>{toPrice(trades[key].cost)}</TableCell>
              <TableCell>{toPrice(trades[key].fee)}</TableCell>
              <TableCell>{trades[key].margin}</TableCell>
              <TableCell>{trades[key].ordertype}</TableCell>
              <TableCell>{trades[key].pair}</TableCell>
              <TableCell>{toPrice(trades[key].price)}</TableCell>
              <TableCell>{trades[key].type}</TableCell>
              <TableCell>
                {trades[key].posstatus != "open" ? "Closed" : "Open"}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
);
