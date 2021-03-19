import React, {
    ReactElement
} from 'react';
import {
    Switch,
    Route,
    BrowserRouter as Router,
} from 'react-router-dom';
import App from './App';
import AppRoutes from '../routes';
import Home from '../routes/Home'

export default () : ReactElement => (
    <App>
        <Router basename={AppRoutes.BaseName}>
            <Switch>
                <Route component={Home} />
                {/*  Add rest of routes  */}
            </Switch>
        </Router>
    </App>
);
