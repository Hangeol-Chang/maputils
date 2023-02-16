import { Circle, CircleF, GoogleMap, LoadScript, Marker, MarkerF, Polyline, PolylineF } from '@react-google-maps/api'
import { useEffect, useState } from 'react';
import LineComponent from '../../components/pathdrawer/LineComponent';
import PathInput from '../../components/pathdrawer/PathInput';
import PathView from '../../components/pathdrawer/PathView';

export default function pathDrawer() {
    let [containerStyle, setContainerStyle] = useState({});
    const iniOption = {
        path : [{lat: 37.500142, lng: 127.026444},
            {lat: 37.498578, lng: 127.027175},
            {lat: 37.498282, lng: 127.027248}],
        hmd : false,
        viewArrow : false,
        lngfirst : false,
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
    
    // 생성된 path를 저장해놓을 변수들
    let [idfs, setIdfs] = useState([0, 1, 2]);
    let [idfCount, setIdfCount] = useState(3);
    let [options, setOptions] = useState( { 0 : iniOption, 1 : iniOption, 2 : iniOption } );

    // view에 올릴 선택된 path의 정보
    let [nowIdf, setNowIdf] = useState(0);
    let [nowOption, setNowOption] = useState(options[0]);
    
    let [center, setCenter] = useState({ lat: 37.498578, lng: 127.027175 });
    let [zoom, setZoom] = useState(15);

    let [lngfirst, setLngfirst] = useState(false);
    let [hhmmddd, setHhmmddd] = useState(false);

    // api로 분리할 것.
    const convertrawCoorditoCoordi = function(coordi) {
        let coordiString = coordi
            .replaceAll("[", "")
            .replaceAll("]", "")
            .replaceAll(" ", "")
            .replaceAll("\t", ",")
            .replaceAll("\n", ",")

        const coordiArr = coordiString.split(",").map(Number); 
        console.log(coordiArr)
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

    const drawPath = function(pathString) {
        let newLine = iniOption;
        newLine.path = convertrawCoorditoCoordi(pathString);

        setOptions({...options, [idfCount] : newLine});
        setIdfs([...idfs, idfCount]);
        setNowIdf(idfCount);
        setNowOption(newLine);

        setIdfCount(idfCount + 1);

        console.log(newLine)

        if(newLine.path) {
            setCenter({ lat : newLine.path[0].lat, lng : newLine.path[0].lng})
        }
    }

    const changeOption = function() {
        console.log("change now Option");
    }

    // path의 좌표에 포커스되었을 때
    const focusCoordi = function(lat, lng) {
        setCenter({lat : lat, lng : lng})
    }
    
    const changeNow = function(idf) {
        if(idf == nowIdf) return;

        console.log(idf)

        setOptions({...options, [nowIdf] : nowOption})
        setNowIdf(idf)
        setNowOption(options[idf])
    }

    return(
        <div className="flex mx-2 gap-2">
            <div className="flex flex-col gap-2 basis-1/5">
                <PathInput className="bg-gray-100 p-2 h-40 rounded shadow-md"
                    lngfirst={lngfirst} setLngfirst={setLngfirst}
                    drawPath={drawPath}
                />
                <PathView className="rounded h-full shadow-md" 
                    idfs={idfs} 
                    nowIdf={nowIdf}
                    nowOption={nowOption}
                    setNowOption={setNowOption}

                    changeOption={changeOption}
                    focusCoordi={focusCoordi}
                    changeNow={changeNow}
                />
            </div>

            <div className="bg-red-100 basis-4/5 h-screen">
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

                        </GoogleMap>
                    </LoadScript>
                
            </div>
        </div>
    )
}