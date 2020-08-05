import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import ScrollToTop from 'layout/ScrollToTop';

import * as path from './paths';
import Home from './Home';
import { Main } from 'layout/Main';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Main>
          <Container maxWidth="lg">
            <Switch>
              <Route path={path.home} component={Home} />
            </Switch>
          </Container>
        </Main>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Routes;
