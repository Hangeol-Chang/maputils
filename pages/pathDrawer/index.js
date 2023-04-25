import { Circle, CircleF, GoogleMap, LoadScript, Marker, MarkerF, Polyline, PolylineF } from '@react-google-maps/api'
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import LineComponent from '../../components/pathdrawer/LineComponent';
import PathInput from '../../components/pathdrawer/PathInput';
import PathView from '../../components/pathdrawer/PathView';
import { centerState, emptyOptionState, focusState, hoverEnableState, idfCountState, idfsState, labelState, mapTypeState, nowIdfState, nowOptionState, optionsState } from '../../components/states/pathDrawerState';
import { iniOptionState } from '../../components/states/pathDrawerState';
import Button from '../../components/common/Button';
import NaverMapComp from '../../components/pathdrawer/NaverMapComp';
import { Container as MapDiv } from 'react-naver-maps'

export default function PathDrawer() {
    let [containerStyle, setContainerStyle] = useState({});
    let [mapType, setMapType] = useRecoilState(mapTypeState);
    const iniOption = useRecoilValue(iniOptionState);

    let [ focusOption, setFocusOption ] = useState({
        strokeOpacity : 0, fillOpacity: 0.4,
        clickable: false, draggable: false,
        editable: false, visible: true,
        radius: 0.8, zIndex: 1,
        fillColor: "#00FF00",
    });
    let hoverEnable = useRecoilValue(hoverEnableState);
    let [ focus, setFocus ] = useRecoilState(focusState);

    // 생성된 path를 저장해놓을 변수들
    let [idfs, setIdfs] = useRecoilState(idfsState);
    let [options, setOptions] = useRecoilState(optionsState);
    let emptyOption = useRecoilValue(emptyOptionState);
    let [idfCount, setIdfCount] = useRecoilState(idfCountState);
    
    // view에 올릴 선택된 path의 정보
    let [nowIdf, setNowIdf] = useRecoilState(nowIdfState);
    let [label, setLabel] = useRecoilState(labelState);
    let [nowOption, setNowOption] = useRecoilState(nowOptionState);

    let [center, setCenter] = useRecoilState(centerState);
    let [zoom, setZoom] = useState(15);

    let [lngfirst, setLngfirst] = useState(false);
    let [hhmmddd, setHhmmddd] = useState(false);
    
    // 좌표배열을 받아서, 화살표 배열을 만들기.
    const makeArrow = function(coordi) {
        const len = coordi.length;
        const arrowd = 0.00001;

        let arrows = [];
        for(let i = 1; i < len; i++) {
            // convert to radian
            let lat1 = coordi[i].lat * Math.PI/180;
            let lat2 = coordi[i-1].lat * Math.PI/180;
            
            let lng1 = coordi[i].lng * Math.PI/180;
            let lng2 = coordi[i-1].lng * Math.PI/180;

            let X = Math.cos(lat2) * Math.sin(lng2 - lng1);
            let Y = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1);
            
            console.log(X, Y);
            // const theta = Math.atan2(Y, X) * 180 / Math.PI;
            const theta = Math.atan2(Y, X);
            const delta = 35 * Math.PI / 180;

            // 위에꺼 역산해서 쓰기
            const t1 = theta + delta;
            const t2 = theta - delta;

            const lat = coordi[i].lat;
            const lng = coordi[i].lng;

            const arrow = [
                {
                    lat : lat + Math.sin(t1) * arrowd, lng : lng + Math.cos(t1) * arrowd
                }, {
                    lat : lat, lng : lng
                }, {
                    lat : lat + Math.sin(t2) * arrowd, lng : lng + Math.cos(t2) * arrowd
                }
            ]
            arrows.push(arrow)
        }
        return arrows
    }
    // api로 분리할 것.
    // 좌표string > 배열로 만드는 기능
    const convertrawCoorditoCoordi = function(coordi) {
        let coordiString = coordi
            .replaceAll("[", " ")
            .replaceAll("]", " ")
            .replaceAll("\t", " ")
            .replaceAll("\n", " ")
            .replaceAll(",", " ")
            .replace(/^\s+|\s+$/g,'').replace(/ +/g, " ")
            .replaceAll(" ", ",");

        // console.log(coordiString);

        const coordiArr = coordiString.split(",").map(Number); 
        const len = parseInt(coordiArr.length)*2;
        let tmpPath = []

        let latidf = 0;
        let lngidf = 1;
        if(lngfirst) { latidf = 1; lngidf = 0; }
        
        for (let i = 0; i < len; i += 2) {
            let tmplat = coordiArr[i + latidf];
            let tmplng = coordiArr[i + lngidf];

            if(hhmmddd) {
                tmplat = parseInt(tmplat / 100) + tmplat % 100 / 60;
                tmplng = parseInt(tmplng / 100) + tmplng % 100 / 60;
                // tmplat = parseInt(tmplat / 100) + parseInt(tmplat % 100) / 60 + (tmplat % 1)*100 / 3600;
                // tmplng = parseInt(tmplng / 100) + parseInt(tmplng % 100) / 60 + (tmplng % 1)*100 / 3600;
            }

            if((Math.abs(tmplat) < 1 || Math.abs(tmplng) < 1)) continue;
            if(!tmplat || !tmplng) break;

            // console.log(tmplat, tmplng)
            tmpPath.push({
                "lat" : tmplat,
                "lng" : tmplng
            })
        }
        
        console.log(tmpPath)
        return tmpPath;
    }

    // 새 line을 그리기
    const drawPath = function(pathString) {
        let newLine = {...emptyOption};
        if(!pathString) return;

        newLine.path = convertrawCoorditoCoordi(pathString);        
        newLine.arrows = makeArrow(newLine.path);
        newLine.label = label ? label : idfCount;

        setLabel('');
        setOptions({...options, [nowIdf] : nowOption, [idfCount] : newLine});
        // setOptions({...options, [idfCount] : newLine});
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

            let tmpOptions = {...options};
            delete tmpOptions[prevIdf];
            setOptions(tmpOptions);
            setIdfs(idfs.filter((v) => v != prevIdf));
        }
        else{
            setNowIdf(-1);
            setNowOption({
                ...iniOption,
                path : [],
                arrows : [],
            });
            setIdfs([]);
            setOptions({});
        }
    }

    const clickCoordi = function(lat, lng) {
        setCenter({lat : lat, lng : lng})
        setFocus({lat : lat, lng : lng})
    }

    // path의 좌표에 포커스되었을 때
    const focusCoordi = function(lat, lng) {
        
        if(hoverEnable) {
            setCenter({lat : lat, lng : lng})
            setFocus({lat : lat, lng : lng})
        }
    }
    
    const changeNow = function(idf) {
        if(idf == nowIdf) return;

        setOptions({...options, [nowIdf] : nowOption})
        setNowIdf(idf)
        setNowOption(options[idf])
    }

    const Map = function() {

        if(mapType == 'google') {
            return (
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
            )
        }
        else if (mapType == 'naver') {
            return (
                <MapDiv style={{width : '100%', height: '100%'}}>
                    <NaverMapComp />
                </MapDiv>
            )
        }
    }

    const setMapTypeFunc = function(val) {
        if (val != mapType) {
            setMapType(val);
        }
    }

    return(
        <div className="flex mx-2 gap-2">

            <div className="bg-red-100 w-full h-screen">
                <Map />
            </div>

            <Button className={`absolute left-2 top-2`} color={ mapType == 'google' ? `primary` : `primary_outline`} 
                clickEvent={() => (setMapTypeFunc('google'))} value="google"/>
            <Button className={`absolute left-2 top-8`} color={ mapType == 'naver' ? `primary` : `primary_outline`} 
                clickEvent={() => (setMapTypeFunc('naver'))} value="naver_"/>

            <div className=" absolute top-32 left-4 flex flex-col gap-2 basis-1/5 max-w-[260px] min-w-[230px] bg-white p-2 rounded shadow-md">
                <PathInput className="bg-gray-100 p-2 h-50 rounded"
                    lngfirst={lngfirst} setLngfirst={setLngfirst}
                    drawPath={drawPath}

                    focusOption={focusOption} setFocusOption={setFocusOption}
                />
                <PathView className="rounded max-h-full bg-white" 
                    idfs={idfs} 
                    nowIdf={nowIdf}
                    nowOption={nowOption}
                    setNowOption={setNowOption}
                    delLine={delLine}

                    focusCoordi={focusCoordi}
                    clickCoordi={clickCoordi}
                    changeNow={changeNow}
                />
            </div>

        </div>
    )
}