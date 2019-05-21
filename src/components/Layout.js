import React, { Fragment } from 'react';

import './styles/Layout.css';

import Header from './Header';
import Wrapper from './Wrapper';

const Layout = props => {
  return (
    <Fragment>
      <Wrapper>
        <Header />
        {props.children}
      </Wrapper>
    </Fragment>
  );
}

export default Layout;
