
import { atom } from 'recoil';

const prefixState = atom({
    key : 'prefixState',
    default : process.env.NODE_ENV === "production" 
        ? "https://hangeol-chang.github.io/maputils"
        : ""
}) 

export {prefixState};