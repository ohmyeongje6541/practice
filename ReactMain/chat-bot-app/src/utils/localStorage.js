const MEMO_KEY = "memos";

export function saveMemosToLocalStorage(memos) {
  localStorage.setItem(MEMO_KEY, JSON.stringify(memos));
}

export function getMemosFromLocalStorage() {
  const memos = localStorage.getItem(MEMO_KEY);
  return memos ? JSON.parse(memos) : [];
}
