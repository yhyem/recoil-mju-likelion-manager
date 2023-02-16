import { atom, selector } from "recoil";

export const countState = atom({
  key: "countState",
  default: 0,
});

export const inputValue = atom({
  key: "inputValuee",
  default: "",
});

export const countInputState = selector({
  key: "getCount",
  get: ({ get }) => {
    return `카운트 : ${get(countState)}, 입력값 :${get(inputValue)}`;
  },
});
