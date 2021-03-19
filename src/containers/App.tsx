import React, { ReactNode, ReactElement } from 'react';
import GlobalStyles from '../theme/utils/GlobalStyles';

type AppProps = {
    children?: ReactNode
};

const App = ({ children } : AppProps) : ReactElement => (
    <div>
        <GlobalStyles />
        {children}
    </div>
);

App.defaultProps = {
    children: null,
};

export default App;
