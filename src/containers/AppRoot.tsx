import React, { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';
import AppRouter from './AppRouter';
import theme from '../theme';

const AppRoot = () : ReactElement => (
    <ThemeProvider theme={theme}>
        <AppRouter />
    </ThemeProvider>
);

export default AppRoot;
