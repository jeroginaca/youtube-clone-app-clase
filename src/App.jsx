import React from 'react'
import { Box } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChannelDetail, VideoDetail, Feed, Navbar, SearchFeed } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor:"#0F0F0F" }}>
        <Navbar /> 
        <Routes>
          <Route path='/' exact element={<Feed />}/>
          <Route path='/video/:id' exact element={<VideoDetail />}/>
          <Route path='/channel/:id' exact element={<ChannelDetail />}/>
          <Route path='/search/:searchTerm' exact element={<SearchFeed />}/>
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App