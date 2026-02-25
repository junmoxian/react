// import { useState } from 'react'
import './App.css'
import Card from './components/card'
function App() {
  return (
    <>
      <div className='box'>
          <Card>
        <h1>Hello</h1>
      </Card>
      <Card title={<h1>我喜欢vue</h1>} extra={<a href="#">操作</a>}  footer={<span>底部说明或按钮</span>}>
        <h1>Hello</h1>
      </Card>
      <Card title={<h1>我喜欢react</h1>}>
        <h1>Hello</h1>
      </Card>
    </div>
    </>
  )
}

export default App
