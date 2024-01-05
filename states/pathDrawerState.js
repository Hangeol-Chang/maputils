import { atom } from "recoil"

// defines

const const_lineOption = {
    strokeOpacity: 0.8, strokeWeight: 1.5,
    clickable: false, draggable: false,
    editable: false, visible: true, zIndex: 1,
    strokeColor: "#0000FF",
    red : 0, green : 0, blue : 255
};

const const_circleOption = {
    strokeOpacity : 0, fillOpacity: 0.4,
    clickable: false, draggable: false,
    editable: false, visible: false,
    radius: 1, zIndex: 1,
    fillColor: "#FF0000",
    red : 255, green : 0, blue : 0
};

const const_arrowoption = {
    strokeOpacity: 0.9, strokeWeight: 1.5,
    clickable: false, draggable: false,
    editable: false, visible: false, zIndex: 1,
    strokeColor: "#0000FF",
    red : 0, green : 0, blue : 255
};

const const_vanillaOptionState = atom({
    key : 'const_vanillaOptionState',
    default : {
        label : 'empty',
        path : [],
        arrows: [],
        lineOption : const_lineOption,
        circleOption : const_circleOption,
        arrowOption : const_arrowoption,
    }
})

// recoil atoms

const hoverEnableState = atom({
    key : 'hoverEnableState',
    default : false
})

const centerState = atom({
    key : 'centerState',
    default : { lat: 37.3083909, lng: 127.1293028 }
})

const idfsState = atom({
    key : 'idfsState',
    // default : [0]
    default : []
})
const optionsState = atom({
    key : 'optionsState',
    default : {}
})

const nowIdfState = atom({
    key : 'nowIdfState',
    default : 0,
})
const nowOptionState = atom({
    key : 'nowOptionState',
    default : const_vanillaOptionState
})

const editLineState = atom({
    key : 'editLineState',
    default : []
})

const editArrowState = atom({
    key : 'editArrowState',
    default : []
})


export {
    hoverEnableState,
    
    centerState,
    idfsState,
    optionsState,

    nowIdfState,
    nowOptionState,
    
    editLineState,
    editArrowState,
}