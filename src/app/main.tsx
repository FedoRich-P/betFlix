import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@app/index.css';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import 'bear-react-carousel/dist/index.css';
import { RouterProvider } from 'react-router';
import { store } from '@app/store';
import { router } from '@app/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
