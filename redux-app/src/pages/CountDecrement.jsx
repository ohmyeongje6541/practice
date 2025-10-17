// 전역 상태 count 감소 로직을 위한 코드
import { useDispatch } from "react-redux";
import { decrement } from "../store/counterSlice";
import StepSet from "./StepSet";

export default function CountDecrement() {
  // 전역 상태 count 감소 로직을 위한 코드
  const dispatch = useDispatch();

  function handleDecrement() {
    // 전역 상태 count 감소 로직
    dispatch(decrement())
  }
  return (
    <div>
      <button
        className="border-2 p-2 cursor-pointer"
        onClick={() => handleDecrement()}
      >
        전역 상태 count 감소
      </button>
      <div>현재 단위: {StepSet}</div>
    </div>
  );
}
