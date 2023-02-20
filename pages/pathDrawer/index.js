import { Circle, CircleF, GoogleMap, LoadScript, Marker, MarkerF, Polyline, PolylineF } from '@react-google-maps/api'
import { useEffect, useState } from 'react';
import LineComponent from '../../components/pathdrawer/LineComponent';
import PathInput from '../../components/pathdrawer/PathInput';
import PathView from '../../components/pathdrawer/PathView';

export default function PathDrawer() {
    let [containerStyle, setContainerStyle] = useState({});
    const iniOption = {
        path : [{lat: 37.500142, lng: 127.026444},
            {lat: 37.498578, lng: 127.027175},
            {lat: 37.498282, lng: 127.027248}],
        viewArrow : true,
        lineOption : {
            strokeOpacity: 0.8, strokeWeight: 2,
            clickable: false, draggable: false,
            editable: false, visible: true, zIndex: 1,
            strokeColor: "#0000FF",
            red : 0, green : 0, blue : 255
        },
        circleOption : {
            strokeOpacity : 0, fillOpacity: 0.4,
            clickable: false, draggable: false,
            editable: false, visible: true,
            radius: 1, zIndex: 1,
            fillColor: "#FF0000",
            red : 255, green : 0, blue : 0
        }
    }

    const focusOption = {
        strokeOpacity : 0, fillOpacity: 0.4,
        clickable: false, draggable: false,
        editable: false, visible: true,
        radius: 0.8, zIndex: 1,
        fillColor: "#00FF00",
    }
    let [ focus, setFocus ] = useState({lat : 0, lng : 0 })

    
    // 생성된 path를 저장해놓을 변수들
    let [idfs, setIdfs] = useState([0]);
    let [idfCount, setIdfCount] = useState(1);
    let [options, setOptions] = useState( { 0 : iniOption, } );

    // view에 올릴 선택된 path의 정보
    let [nowIdf, setNowIdf] = useState(0);
    let [nowOption, setNowOption] = useState(options[0]);
    
    let [center, setCenter] = useState({ lat: 37.498578, lng: 127.027175 });
    let [zoom, setZoom] = useState(15);

    let [lngfirst, setLngfirst] = useState(false);
    let [hhmmddd, setHhmmddd] = useState(false);
    
    // 좌표배열을 받아서, 화살표 배열을 만들기.
    const makeArrow = function(coordi) {
        const len = coordi.length;

        for(let i = 1; i < len; i++) {
            // convert to radian
            let lat1 = coordi[i].lat * Math.PI/180;
            let lat2 = coordi[i-1].lat * Math.PI/180;
            
            let lng1 = coordi[i].lng * Math.PI/180;
            let lng2 = coordi[i-1].lng * Math.PI/180;

            let X = Math.cos(lat2) * Math.sin(lng2 - lng1);
            let Y = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1);
            
            console.log(X, Y);
            const theta = Math.atan2(Y, X) * 180 / Math.PI;
            const delta = 35;
            const t1 = theta + delta;
            const t2 = theta - delta;

            // 위에꺼 역산해서 쓰기
        }

        return {}
    }
    // api로 분리할 것.
    // 좌표string > 배열로 만드는 기능
    const convertrawCoorditoCoordi = function(coordi) {
        let coordiString = coordi
            .replaceAll("[", "")
            .replaceAll("]", "")
            .replaceAll(" ", "")
            .replaceAll("\t", ",")
            .replaceAll("\n", ",")

        const coordiArr = coordiString.split(",").map(Number); 
        const len = parseInt(coordiArr.length)*2;
        let tmpPath = []

        let latidf = 0;
        let lngidf = 1;
        if(lngfirst) { latidf = 1; lngidf = 0; }
        
        for (let i = 0; i < len; i += 2) {
            let tmplat = coordiArr[i + latidf];
            let tmplng = coordiArr[i + lngidf];

            console.log(tmplat + " " + tmplng)
            if(hhmmddd) {
                tmplat = parseInt(tmplat / 100) + tmplat % 100 / 60;
                tmplng = parseInt(tmplng / 100) + tmplng % 100 / 60;
                // tmplat = parseInt(tmplat / 100) + parseInt(tmplat % 100) / 60 + (tmplat % 1)*100 / 3600;
                // tmplng = parseInt(tmplng / 100) + parseInt(tmplng % 100) / 60 + (tmplng % 1)*100 / 3600;
            }

            if((Math.abs(tmplat) < 1 || Math.abs(tmplng) < 1)) continue;
            if(!tmplat || !tmplng) break;
            
            tmpPath.push({
                "lat" : tmplat,
                "lng" : tmplng
            })
        }

        return tmpPath;
    }

    // 새 line을 그리기
    const drawPath = function(pathString) {
        let newLine = iniOption;
        newLine.path = convertrawCoorditoCoordi(pathString);
        const arrows = makeArrow(newLine.path)

        setOptions({...options, [idfCount] : newLine});
        setIdfs([...idfs, idfCount]);
        setNowIdf(idfCount);
        setNowOption(newLine);

        setIdfCount(idfCount + 1);

        if(newLine.path) {
            setCenter({ lat : newLine.path[0].lat, lng : newLine.path[0].lng})
        }
    }

    // 기존 line 지우기
    const delLine = function() {
        const prevIdf = nowIdf;
        if(idfs.length > 1) {
            if (prevIdf != idfs[0]) setNowIdf(idfs[0]);
            setNowOption(options[idfs[0]]);
        }
        else{
            setNowIdf(-1);
            setNowOption({
                path : [],
                hmd : false,
                viewArrow : false,
                lngfirst : false,
                lineOption : {
                    strokeOpacity: 0.8, strokeWeight: 2,
                    clickable: false, draggable: false,
                    editable: false, visible: true, zIndex: 1,
                    strokeColor: "#000",
                    red : 0, green : 0, blue : 0
                },
                circleOption : {
                    strokeOpacity : 0, fillOpacity: 0.4,
                    clickable: false, draggable: false,
                    editable: false, visible: true,
                    radius: 1, zIndex: 1,
                    fillColor: "#000",
                    red : 0, green : 0, blue : 0
                }
            });
        }
        setIdfs(idfs.filter((v) => v != prevIdf));

        let tmpOptions = options;
        delete tmpOptions[prevIdf];
        setOptions(tmpOptions);
    }

    const changeOption = function() {
        console.log("change now Option");
    }

    // path의 좌표에 포커스되었을 때
    const focusCoordi = function(lat, lng) {
        setCenter({lat : lat, lng : lng})
        setFocus({lat : lat, lng : lng})
    }
    
    const changeNow = function(idf) {
        if(idf == nowIdf) return;

        setOptions({...options, [nowIdf] : nowOption})
        setNowIdf(idf)
        setNowOption(options[idf])
    }

    return(
        <div className="flex mx-2 gap-2">
            <div className="flex flex-col gap-2 basis-1/5 max-w-[260px] min-w-[230px]">
                <PathInput className="bg-gray-100 p-2 h-44 rounded shadow-md"
                    lngfirst={lngfirst} setLngfirst={setLngfirst}
                    drawPath={drawPath}
                />
                <PathView className="rounded max-h-full shadow-md" 
                    idfs={idfs} 
                    nowIdf={nowIdf}
                    nowOption={nowOption}
                    setNowOption={setNowOption}
                    delLine={delLine}

                    changeOption={changeOption}
                    focusCoordi={focusCoordi}
                    changeNow={changeNow}
                />
            </div>

            <div className="bg-red-100 w-full h-screen">
                <LoadScript
                        googleMapsApiKey="AIzaSyBkZS2y5XLGTz09p372w0MV4bQgeukEiiQ"
                    >
                        <GoogleMap
                            mapContainerStyle={{width : '100%', height: '100%'}}
                            center={center}
                            zoom={zoom}
                        >
                            {
                                idfs.map((idf, idx) => (
                                    idf == nowIdf ? <></>
                                    : <LineComponent key={idx} option={options[idf]} />
                                ))
                            }

                            <LineComponent option={nowOption} />
                            
                            <CircleF center={focus} options={focusOption} />
                        </GoogleMap>
                    </LoadScript>
                
            </div>
        </div>
    )
}