import { Routes, Route } from 'react-router-dom';

import './App.css'
import Mainlayout from './assets/Layout/Mainlayout';

function App() {

  return (
<div className='max-w-screen-xl mx-auto'>
  <Routes>
    <Route path="/" element={<Mainlayout/>}>
    </Route>
  </Routes>
</div>
  )
}

export default App
