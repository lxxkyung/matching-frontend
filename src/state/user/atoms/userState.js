import { atom } from "recoil";

//로그인 유저
const loginUserState = {
    id : '',
    name : '',
    email : '',
}

//login state
export const loginState = atom({
    key: 'loginState', // unique ID (다른 atoms/selectors을 구별하기 위해서)
    default: loginUserState, // default value (aka initial value)
})