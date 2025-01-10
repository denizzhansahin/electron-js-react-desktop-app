import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout.tsx'
import { Work } from './assets/pages/Work.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}></Route>
      <Route path='/work' element={<Work/>}></Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
