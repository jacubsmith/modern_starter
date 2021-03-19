import React, { ReactElement, ReactNode } from 'react';

type AppLayoutProps = {
    children?: ReactNode,
    testID: string
};

const AppLayout = ({ children, testID } : AppLayoutProps) : ReactElement => (
    <div data-tid={testID}>
       <main>
        {children}
       </main>
    </div>
);

AppLayout.defaultProps = {
    children: null,
};

export default AppLayout;
