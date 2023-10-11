//import 'bootstrap/dist/js/bootstrap.bundle.js'
//import 'bootstrap/scss/bootstrap.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { registerApplication, start } from 'single-spa'
import App from './App'
import './assets/custom.scss'

const contactosModule = '@sspa-vite/contactos'

registerApplication({
  name: 'contactos',
  app: () => import(/* @vite-ignore */ contactosModule),
  activeWhen: '/contactos',
})
start()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
