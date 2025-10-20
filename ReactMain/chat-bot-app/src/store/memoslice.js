import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  memos: [], // 메모 목록
  filter: "all", // all | completed | uncompleted
};

const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    addMemo(state, action) {
      state.memos.push(action.payload);
    },
    toggleMemo(state, action) {
      const memo = state.memos.find((m) => m.id === action.payload);
      if (memo) memo.isCompleted = !memo.isCompleted;
    },
    deleteMemo(state, action) {
      state.memos = state.memos.filter((m) => m.id !== action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    loadMemos(state, action) {
      state.memos = action.payload;
    },
  },
});

export const { addMemo, toggleMemo, deleteMemo, setFilter, loadMemos } = memoSlice.actions;
export default memoSlice.reducer;
