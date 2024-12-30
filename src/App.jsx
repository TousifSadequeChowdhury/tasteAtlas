import { Routes, Route } from 'react-router-dom';

import './App.css'
import About from './assets/pages/About';

function App() {

  return (
<div>
  <Routes>
    <Route path="/" element={<About/>}>
    </Route>
  </Routes>
</div>
  )
}

export default App
