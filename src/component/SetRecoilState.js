import { useRecoilState, useSetRecoilState, useResetRecoilState } from "recoil";
import { countState } from "../atoms/count";

function SetRecoilState() {
  const [count, setCount] = useRecoilState(countState);
  const setCountSetRecoilState = useSetRecoilState(countState);
  const reset = useResetRecoilState(countState);
  return (
    <div>
      <p>카운트 : {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCountSetRecoilState(count + 1)}>
        +1(UseSetRecoilState)
      </button>
      <button onClick={() => setCountSetRecoilState(count - 1)}>
        -1(UseSetRecoilState)
      </button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default SetRecoilState;
