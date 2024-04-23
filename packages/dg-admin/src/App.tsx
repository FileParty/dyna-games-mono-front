import { useState } from 'react';
import {} from "@features/test/aaa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>다이나믹 게임즈 관리자 페이지입니다</h1>
      <div>
        <p>현재 카운트: {count}</p>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
      </div>
    </>
  )
}

export default App
