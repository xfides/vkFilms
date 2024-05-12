// import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/css/normalize.css'
import '@/assets/css/global.css'
import AppProviders from "@/context/AppProviders.tsx";
import App from "@/components/App"

console.clear();

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <AppProviders>
    <App/>
  </AppProviders>
  // </React.StrictMode>,
)
