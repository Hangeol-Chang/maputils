// google, naver 합쳐서 하나로 만든 버전입니다.

import { useEffect, useState } from "react"
import Button from "../../components/common/Button";

// googlemap options
import { Circle, CircleF, GoogleMap, LoadScript, Marker, MarkerF, Polyline, PolylineF } from '@react-google-maps/api'

// navermap options
import { Container as MapDiv, NavermapsProvider, useNavermaps } from 'react-naver-maps'
import NaverMapComp from "../../components/pathdrawer/naver/NaverMapComp";
import GoogleMapComp from "../../components/pathdrawer/google/GoogleMapComp";
import PathView from "../../components/pathdrawer/PathView2";
import PathInput from "../../components/pathdrawer/PathInput2";


export default function PathDrawer() {
    
    // 어느 api를 사용할지.
    const [mapProvider, setMapProvider] = useState('naver'); // google || naver

    const [contentHeight, setContentHeight] = useState(0);
    
    const handleResize = function() {
        setContentHeight(window.innerHeight - 80);
    }

    useEffect(() => {
        setContentHeight(window.innerHeight - 80);

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    

    const MapComp = function() {
        if(mapProvider == 'google') {
            return (
                <LoadScript
                    googleMapsApiKey="AIzaSyBkZS2y5XLGTz09p372w0MV4bQgeukEiiQ"
                >
                    <GoogleMapComp />
                </LoadScript>
            )
        }
        else if (mapProvider == 'naver') {
            return (
                <NavermapsProvider ncpClientId='an7y5ntcz5' >
                    <MapDiv style={{width : '100%', height: '100%'}}>
                        <NaverMapComp />
                    </MapDiv>
                </NavermapsProvider>
            )
        }  
        else {
            return <div>Something Wrong</div>
        }
    }

    return (
        <div className="flex mx-2 gap-2">
            
            <div className="bg-blue-100 w-full"
                style={{ height : contentHeight }}
            >
                <MapComp />
            </div>

            { /* api 변경 버튼 */
            ['google', 'naver'].map((prov, idx) => (
                <Button className={`absolute top-14 left-${idx*18 + 2} w-16`} color={ mapProvider == prov ? `primary` : `primary_outline`} 
                    clickEvent={ () => setMapProvider(prov) } value={prov} />
            ))}

            {/* side menu */}
            <div className={`
                    absolute top-32 left-4
                    flex flex-col gap-2 basis-1/5
                    max-w-[260px] min-w-[230px] 
                    bg-white p-2 rounded shadow-md"
                `}
            >
                <PathInput className="bg-gray-100 p-2 h-50 rounded" />
                <PathView className="rounded max-h-full bg-white" />
            </div>

            
        </div>
    )
}