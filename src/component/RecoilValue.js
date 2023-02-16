import { useRecoilValue } from "recoil";
import { countState } from "../atoms/count";

function RecoilValue() {
  const count = useRecoilValue(countState);
  return (
    <div>
      <p>카운트 : {count}</p>
    </div>
  );
}

export default RecoilValue;
