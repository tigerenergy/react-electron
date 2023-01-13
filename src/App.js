import { HashRouter, Route, Routes } from 'react-router-dom'

import Test from './component/Test'
import Test2 from './component/Test'

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Test />} />
          <Route path='/lobby' element={<Test2 />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
