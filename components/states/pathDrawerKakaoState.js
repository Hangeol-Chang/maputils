
import { atom } from 'recoil';

const hoverEnableState = atom({
    key : 'hoverEnableState',
    default : false
}) 

const circleOptionInit = {
    center : [],
    radius: 1, // 미터 단위의 원의 반지름입니다 
    strokeWeight: 5, // 선의 두께입니다 
    strokeStyle: 'dashed', // 선의 스타일 입니다
    fillColor: '#FF0000', // 채우기 색깔입니다
    fillOpacity: 0.7, // 채우기 불투명도 입니다   
    red : 255, green : 0, blue : 0,
    visible : false
}

const lineOptionInit = {
    path: [], // Kakao.maps.LatLng 배열
    strokeWeight: 5, // 선의 두께 입니다
    strokeColor: '#0000FF', // 선의 색깔입니다
    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'solid', // 선의 스타일입니다
    red : 0, green : 0, blue : 255,
    visible : true,
}


const arrowOptionInit = {
    path: [], // Kakao.maps.LatLng 배열
    strokeWeight: 5, // 선의 두께 입니다
    strokeColor: '#0000FF', // 선의 색깔입니다
    strokeOpacity: 0.7, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
    strokeStyle: 'solid', // 선의 스타일입니다
    red : 0, green : 0, blue : 255,
    visible : false,
}

const iniOptionInit = {
    label : 'ini',
    lineOption : lineOptionInit,
    circleOption : circleOptionInit,
    arrowOption : arrowOptionInit,
}

const emptyOptionState = atom({
    key : 'emptyOptionInit',
    default : {
        label : 'empty',
        lineOption : {...lineOptionInit},
        circleOption : {...circleOptionInit},
        arrowOption : {...arrowOptionInit},
    }
})

const iniOptionState = atom({
    key : 'iniOptionState',
    default : iniOptionInit
})

const nowOptionState = atom({
    key : 'nowOptionState',
    default : emptyOptionState
})

const focusState = atom({
    key : 'focusState',
    default : { lat : 0, lng : 0 }
})

const idfsState = atom({
    key : 'idfsState',
    // default : [0]
    default : []
})

const optionsState = atom({
    key : 'optionsState',
    // default : {0 : iniOptionInit}
    default : {},
})


const idfCountState = atom({
    key : 'idfCountState',
    default : 0,
}) 

const nowIdfState = atom({
    key : 'nowIdfState',
    default : 0,
})

const centerState = atom({
    key : 'centerState',
    default : { lat: 37.498578, lng: 127.027175 }
})

export { 
    hoverEnableState, 
    iniOptionState,
    nowOptionState,
    focusState,
    idfsState,
    optionsState,
    emptyOptionState,
    idfCountState,
    nowIdfState,
    centerState
};