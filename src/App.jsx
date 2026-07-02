import React from 'react'
import Price from './components/Price'
import TotalPrice from './components/TotalPrice'

function App() {
  return (
    <>
      <div className="container text-center text-danger">
        <h1>Price App</h1>

        {/* <Price /> */}
        <TotalPrice />
      </div>
    </>
  )
}

export default App
