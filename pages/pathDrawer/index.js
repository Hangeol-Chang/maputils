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

    const changeOption = function() {
        console.log("change now Option");
    }

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
                <PathInput className="bg-gray-100 p-2 h-40 rounded shadow-md" />
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