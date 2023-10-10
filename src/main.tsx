//import 'bootstrap/dist/js/bootstrap.bundle.js'
//import 'bootstrap/scss/bootstrap.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { registerApplication, start } from 'single-spa'
import App from './App'
import './index.css'

const mifeAModule = '@sspa/mifeA'

registerApplication({
  name: 'mifeA',
  app: () => import(/* @vite-ignore */ mifeAModule),
  activeWhen: '/mifea',
})
start()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
