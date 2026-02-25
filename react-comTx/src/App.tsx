// import { useState } from 'react'
import './App.css'
import Card from './components/card'
import CardB from './components/card-b'
function App() {
  // const fn = (str: string) => {
  //   console.log('点击了',str)
  // }
  return (
    <>
      <div className='box'>
          {/* <Card callback={fn}>
        <h1>Hello</h1>
      </Card>
      <Card title={<h1>我喜欢vue</h1>} extra={<a href="#">操作</a>}  footer={<span>底部说明或按钮</span>}>
        <h1>Hello</h1>
      </Card> */}
       <Card title={<h1>我喜欢react</h1>}>
          <h1>Hello-1</h1>
        </Card>
        <CardB title={<h1>我喜欢react</h1>}>
        <h1>Hello-2</h1>
        </CardB>
   
    </div>
    </>
  )
}

export default App
