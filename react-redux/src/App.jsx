import React from 'react'

const App = () => {
  return (
    <div>
      <div className="container">
        <h1>Increment/Decremet</h1>
        <h4>using React Redux</h4>
        <div className="quantity">
          <button type="button" class="btn btn-danger minus mx-2"><span>-</span></button>
          <input type="text" name='quantity' className='input' value="0" />
          <button type="button" class="btn btn-primary plus mx-2"><span>+</span></button>
        </div>
      </div>

    </div>
  )
}

export default App