import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'
import './styles/index.css'

import App from './App';

const queryClient = new QueryClient();

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  </BrowserRouter>
)

