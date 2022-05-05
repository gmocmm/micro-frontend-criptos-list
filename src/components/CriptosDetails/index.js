import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './../../views/Home';
import CriptoDetails from './../../views/CriptoDetails';

const CriptosDetails = (props) => {
  return (
    <Fragment>
      <h1>Cripto Market!</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/:cripto" element={ <CriptoDetails /> } />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default CriptosDetails;
