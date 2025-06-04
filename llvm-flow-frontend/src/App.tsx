import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from '@/components/pages/main/main'
import Upload from '@/components/pages/upload/upload'
import Profile from '@/components/pages/profile/profile'
import LLVMcfg from '@/components/pages/llvmcfg/llvmcfg'
import Tutorial from '@/components/pages/tutorial/Tutorial'
import NavBar from './components/modules/navbar/NavBar'
import Footer from './components/modules/footer/Footer'
import { useAppSelector, useAppDispatch } from '@/redux/hook'
import { setAuthData } from '@/redux/features/auth/authSlice'
import { useEffect } from 'react'

function App() {
  const { isReady } = useAppSelector((state) => state.graph)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const data = localStorage.getItem('nickname')
    if (data) {
      dispatch(setAuthData(JSON.parse(data)))
    }
  })

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/board" element={<Profile />} />
        {isReady && <Route path="/llvmcfg" element={<LLVMcfg />} />}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
