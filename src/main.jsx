import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Gallery from './routes/Gallery'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import EditPage from './routes/EditPage'
import DetailsPage from './routes/DetailsPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<NavBar />} />
          <Route index={true} element={<App />} />
        <Route index={false} path="/gallery" element={<Gallery />} />
        <Route index={false} path="/details/:id" element={<DetailsPage />} />
        <Route index={false} path="/edit/:id" element={<EditPage />} />
    </Routes>
  </BrowserRouter>
)
