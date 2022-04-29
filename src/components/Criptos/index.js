import React, { Fragment, useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getCriptos } from './../../services/criptos-service';

import './styles.css';

export default function Criptos () {
  const [coins, setCoins] = useState(null);

  const getCoins = async () => {
    const auxCoins = await getCriptos();
    setCoins(auxCoins);
  };

  useEffect(() => {
    getCoins();
  });

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
              coins && coins.map((coin) => (
                <TableRow
                  key={ coin.asset_id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <div className='coin-name__wrapper'>
                      <div className="coin-name__details">
                        <strong>{ coin.name }</strong>
                        <span>{ coin.asset_id }</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    { coin.price_usd }
                  </TableCell>
                  <TableCell align="right">
                    PENDIENT
                  </TableCell>
                  <TableCell align="right">
                    { coin.volume_1day_usd }
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