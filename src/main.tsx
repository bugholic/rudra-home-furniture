import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // ✅ Add this
import App from './App.tsx';
import './index.css';
import { ConvexProvider } from 'convex/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ConvexProvider client={import.meta.env.VITE_CONVEX_CLIENT}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConvexProvider>
  </StrictMode>
);

