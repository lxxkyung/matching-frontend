import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import Router from '@routes';

import  GlobalStyle  from '@styled/global';

function App() {
    return (
        <>
            <GlobalStyle />
            <RecoilRoot>
                <Suspense fallback={<div>Loading</div>}>
                    <BrowserRouter>
                        <Router />
                    </BrowserRouter>
                </Suspense>
            </RecoilRoot>
        </>
    );
}

export default App;
