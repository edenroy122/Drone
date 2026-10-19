import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Map from './components/Map/map'

function AppRoutes() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/map' element={<Map/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRoutes