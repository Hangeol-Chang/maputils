
import { atom } from 'recoil';

const hoverEnableState = atom({
    key : 'hoverEnableState',
    default : false
}) 

const lineOptionInit = {
    strokeOpacity: 0.8, strokeWeight: 1.5,
    clickable: false, draggable: false,
    editable: false, visible: true, zIndex: 1,
    strokeColor: "#0000FF",
    red : 0, green : 0, blue : 255
};

const circleOptionInit = {
    strokeOpacity : 0, fillOpacity: 0.4,
    clickable: false, draggable: false,
    editable: false, visible: false,
    radius: 1, zIndex: 1,
    fillColor: "#FF0000",
    red : 255, green : 0, blue : 0
};

const arrowOptionInit = {
    strokeOpacity: 0.9, strokeWeight: 1.5,
    clickable: false, draggable: false,
    editable: false, visible: false, zIndex: 1,
    strokeColor: "#0000FF",
    red : 0, green : 0, blue : 255
};

const iniOptionInit = {
    label : 'ini',
    path : [{lat: 37.500142, lng: 127.026444},
        {lat: 37.498578, lng: 127.027175},
        {lat: 37.498282, lng: 127.027248}],
    arrows: [
        [
            { "lat": 37.4985836863302,      "lng": 127.02716677408675   },
            { "lat": 37.498578,             "lng": 127.027175           },
            { "lat": 37.49858767466946,     "lng": 127.0271775299745    }
        ],
        [
            { "lat": 37.49828893769791,     "lng": 127.02724079803167   },
            { "lat": 37.498282,             "lng": 127.027248           },
            { "lat": 37.49829114046893,     "lng": 127.02725205608529   }
        ]
    ],
    lineOption : lineOptionInit,
    circleOption : circleOptionInit,
    arrowOption : arrowOptionInit,
};

const editLineState = atom({
    key : 'editLineState',
    default : []
})
const editArrowState = atom({
    key : 'editArrowState',
    default : []
})

const emptyOptionState = atom({
    key : 'emptyOptionState',
    default : {
        label : 'empty',
        path : [],
        arrows: [],
        lineOption : lineOptionInit,
        circleOption : circleOptionInit,
        arrowOption : arrowOptionInit,
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
    default : { lat: 37.3083909, lng: 127.1293028 }
})

const labelState = atom({
    key : 'atomState',
    default : '',
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
    centerState,
    labelState,

    editLineState,
    editArrowState
};