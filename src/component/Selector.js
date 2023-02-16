import { useRecoilState, useRecoilValue } from "recoil";
import { countState, inputValue, countInputState } from "../atoms/count";

function Selector() {
  const [count, setCount] = useRecoilState(countState);
  const [input, setInput] = useRecoilState(inputValue);
  const countInput = useRecoilValue(countInputState);

  return (
    <div>
      <p>카운트 : {count}</p>
      <p>selector {countInput}</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setCount(count + 2)}>+2</button>
      <button onClick={() => setCount(count - 2)}>-2</button>
    </div>
  );
}

export default Selector;
