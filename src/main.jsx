import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'

const disableInteractions = () => {
  if (window.__disableInteractionsApplied) return
  window.__disableInteractionsApplied = true

  document.body.classList.add('disable-interactions')

  const blockEvent = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }

  document.addEventListener('contextmenu', blockEvent, { capture: true })
  document.addEventListener('selectstart', blockEvent, { capture: true })
  document.addEventListener('copy', blockEvent, { capture: true })
  document.addEventListener('cut', blockEvent, { capture: true })
  document.addEventListener('dragstart', blockEvent, { capture: true })

  document.addEventListener(
    'keydown',
    (event) => {
      const key = event.key?.toLowerCase()
      const ctrlOrCmd = event.ctrlKey || event.metaKey
      const shift = event.shiftKey

      if (key === 'f12') return blockEvent(event)

      if (ctrlOrCmd) {
        if (['c', 'u', 's', 'p', 'x', 'a'].includes(key)) return blockEvent(event)
        if (shift && ['i', 'j', 'c'].includes(key)) return blockEvent(event)
      }
    },
    { capture: true },
  )
}

if (import.meta.env.VITE_DISABLE_DEVTOOLS === 'true') {
  disableInteractions()
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
