import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'
import Profile from './components/Profile.jsx'
import PrivacyPolicy from './components/Privacy.jsx'
// import PrivacyPolicy from './components/PrivacyPolicy.jsx'

const router = createBrowserRouter([
  {
    path: '/', Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: 'services', Component: Services
      },
      {
        path: 'profile', Component: Profile
      },
      {
        path: 'privacy-Policy', Component: PrivacyPolicy
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

      <App />
    </RouterProvider>
  </StrictMode>,
)
