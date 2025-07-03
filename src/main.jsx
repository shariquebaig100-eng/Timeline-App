import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { LiveTimer } from './components/LiveTimer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LiveTimer />

  </StrictMode>,
)
