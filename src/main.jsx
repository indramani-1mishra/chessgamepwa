import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// ✅ Import PWA register function
import { registerSW } from 'virtual:pwa-register'

// ✅ Register the Service Worker
registerSW({
  onNeedRefresh() {
    console.log('New content available; please refresh.')
  },
  onOfflineReady() {
    console.log('App ready to work offline.')
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
