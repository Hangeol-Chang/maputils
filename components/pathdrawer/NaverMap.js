import { useRecoilValue } from "recoil";
import { centerState, idfsState, nowIdfState, nowOptionState, optionsState } from "../states/pathDrawerState";
import { useEffect, useRef } from "react";

export default function NaverMap() {
    const center = useRecoilValue(centerState);
    const mapElement = useRef(null);

    const idfs = useRecoilValue(idfsState);
    const nowIdf = useRecoilValue(nowIdfState);
    const options = useRecoilValue(optionsState);
    const nowOption = useRecoilValue(nowOptionState);

    useEffect(() => {
        const { naver } = window;
        if(!mapElement.current || !naver) return;

        const location = new naver.maps.LatLng(center.lat, center.lng);
        const mapOptions = {
            center : location,
            zoom : 17,
            zoomControl : true,
            zoomControlOptions : {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };

        const map = new naver.maps.Map(mapElement.current, mapOptions);
    }, []);
    
    return(
        <div ref={mapElement} style={{width : '100%', height : '100%'}}></div>
    )
}