import React, { Fragment } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './styles.css';

const cripto = [
  {
    id: 0,
    name: 'Bitcoin',
    shortname: 'BTC',
    price: '815.120,00 MXN',
    exchange: '2,00%',
    capitalization: '15,5 BMXN',
    volume: '684,6 mil MMXN',
    supply: '19,0 M'
  },
  {
    id: 1,
    name: 'Bitcoin',
    shortname: 'BTC',
    price: '815.120,00 MXN',
    exchange: '2,00%',
    capitalization: '15,5 BMXN',
    volume: '684,6 mil MMXN',
    supply: '19,0 M'
  },
  {
    id: 2,
    name: 'Bitcoin',
    shortname: 'BTC',
    price: '815.120,00 MXN',
    exchange: '2,00%',
    capitalization: '15,5 BMXN',
    volume: '684,6 mil MMXN',
    supply: '19,0 M'
  }
];

export default function Criptos () {
  return (
    <Fragment>
      <TableContainer component={Paper} sx={{ maxWidth: 1024 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell align="right"><strong>Pricing</strong></TableCell>
              <TableCell align="right"><strong>Exchange</strong></TableCell>
              <TableCell align="right"><strong>Volume (24h)</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              cripto.map((data) => (
                <TableRow
                  key={ data.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <div className='coin-name__wrapper'>
                      <div className='coin-name__icon'>
                        <span></span>
                      </div>
                      <div className="coin-name__details">
                        <strong>{ data.name }</strong>
                        <span>{ data.shortname }</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    { data.price }
                  </TableCell>
                  <TableCell align="right">
                    { data.exchange }
                  </TableCell>
                  <TableCell align="right">
                    { data.volume }
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}
