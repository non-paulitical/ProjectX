import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.tsx'
import { Landing, Auth } from './pages';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/app/*' element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
