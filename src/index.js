import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import reportWebVitals from './reportWebVitals';

// Create a client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <ReactQueryDevtools initialIsOpen={false} />
                <App />
            </RecoilRoot>
        </QueryClientProvider>
    </React.StrictMode>
);

reportWebVitals();
