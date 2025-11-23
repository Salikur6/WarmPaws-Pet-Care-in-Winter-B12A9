import { Outlet, useLocation } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react';
import WinterSpinner from './components/Loading';

function App() {

  const [showLoading, setShowLoading] = useState(false);
  const location = useLocation();
  console.log(location)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowLoading(true)
    const time = setTimeout(() => {
      setShowLoading(false)
    }, 1000)
    return () => clearTimeout(time)
  }, [location.pathname])

  return (
    <>
      <Navbar></Navbar>
      {showLoading ? <WinterSpinner></WinterSpinner> : <Outlet></Outlet>}

      <Footer></Footer>
    </>
  )
}

export default App
