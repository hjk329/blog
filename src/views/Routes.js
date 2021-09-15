import React from 'react';
import styled from 'styled-components';
import {Route, Switch} from "react-router-dom";

import Main from "../pages/Main";
import Add from "../pages/Add";
import Edit from "../pages/Edit";
import Blog from "../pages/Blog";

const Routes = () => {
    return (
        <Container>
            <Switch>
              <Route exact path={'/'} component={Main}/>
              <Route exact path={'/add'} component={Add}/>
              <Route exact path={'/edit/:id'} component={Edit}/>
              <Route exact path={'/blog/:id'} component={Blog}/>
            </Switch>
        </Container>
    )
}

const Container = styled.div`

`;
export default Routes;
