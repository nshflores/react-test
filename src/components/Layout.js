import React, { Fragment } from 'react';

import Header from './Header';
import Wrapper from './Wrapper';

function Layout (props) {
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
