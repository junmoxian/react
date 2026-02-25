import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const list = [1, 2, 3, 4, 5]

  const flag = false
  return (
    <>
      <div>
        {/* 类名 */}
        <h1 className="red" >{count}</h1>
        {/* 类名动态绑定 */}
        <h1 className={count <= 0 ? 'red' : 'blue'}>{count}</h1>
        {/* 内联样式 */}
        <h1 style={{ color: count <= 0 ? 'red' : 'blue' }}>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={() => setCount(count - 1)}>Click me</button>

        {/* innerHTML */}
        <div dangerouslySetInnerHTML={{ __html: '<h1>Hello</h1>' }}></div>

        {/* 数组的遍历 */}
        {/* {
          list.map((item) => (
            <h1 key={item}>{item}</h1>
          ))
        } */}

        {/* 三元运算符+数组的遍历 */}
        {
          flag ? list.map((item) => (
            <h1 key={item}>{item}</h1>
          )) : null
        }
      </div>
    </>
  )
}

export default App
