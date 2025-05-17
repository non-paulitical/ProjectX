import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App.tsx'
import { Landing, Auth } from './pages';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        authorizationParams={{
          redirect_uri: import.meta.env.VITE_BASE_URL + '/app'
        }}>
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/app/*' element={<App />} />
        </Routes>
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode >,
)
