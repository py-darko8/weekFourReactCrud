import { useState } from "react";
 
function Counter() {
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>

    <h1> hello </h1>
    </div>
    
  );
}
export default Counter
