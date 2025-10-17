// 전역 상태 count 증가 로직을 위한 코드
import { useDispatch } from "react-redux";
import { increment } from "../store/counterSlice";
import StepSet from "./StepSet";

export default function CountIncrement() {
  // 전역 상태 count 증가 로직을 위한 코드
  const dispatch = useDispatch();

  function handleIncrement() {
    // 전역 상태 count 증가 로직
   dispatch(increment())
  }
  return (
    <div>
      <button
        className="border-2 p-2 cursor-pointer"
        onClick={() => handleIncrement()}
      >
        전역 상태 count 증가
      </button>
      <div>현재 단위: {StepSet}</div>
    </div>
  );
}
