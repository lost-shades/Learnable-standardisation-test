import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from './pages/LandingPage'
import { SecondPage } from './pages/SecondPage'
import { ProductList } from "./components"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path="SecondPage" element={<SecondPage />} />
            {/* <Route path="SingleItemPage" element={<SingleItemPage />} /> */}

            <Route path="/" element={<ProductList />} />
            <Route path="/product/:productId" element={<SecondPage />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App





// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App