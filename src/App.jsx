
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import Video from './components/Video'
import LikedVideo from './components/LikedVideo'
import WatchLater from './components/WatchLater'
import VideoDetail from './components/VideoDetail'
import Header from './components/Header'

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/video" element={<Video />}></Route>
        <Route path="/likedVideo" element={<LikedVideo />}></Route>
        <Route path="/watchlater" element={<WatchLater />}></Route>
        <Route path="/video/:vId" element={<VideoDetail />}></Route>
      </Routes>
    </>
  )
}

export default App
