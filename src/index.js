import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import UserContextWrapper from './contexts/UserContextWrapper'

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UserContextWrapper>
      <App />
    </UserContextWrapper>
  </BrowserRouter>
)

