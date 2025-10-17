// 전역 상태 count 조회 로직을 위한 코드
import { useSelector } from "react-redux";
import CountIncrement from "./CountIncrement";
import CountDecrement from "./CountDecrement";
import StepSet from "./StepSet";

export default function CountView() {
  // 전역 상태 count 조회 로직을 위한 코드
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <div>현재 step : {count}</div>
      <CountIncrement />
      <CountDecrement />
      <StepSet />
    </div>
  );
}
