import { useRecoilSnapshot, useRecoilState, useRecoilValue } from "recoil";
import { centerState, idfsState, nowIdfState, nowOptionState, optionsState } from "../states/pathDrawerState";
import { useEffect, useRef, useState } from "react";
import Button from "../common/Button";
import { NaverMap, Polyline, useNavermaps } from "react-naver-maps"
import LineComponentNaver from "./LineComponentNaver";


export default function NaverMapComp() {
    const navermaps = useNavermaps();
    const [mapTypeId, setMapTypeId] = useState(navermaps.MapTypeId.NORMAL);

    const setMapTypeIdFunc = function(val) {
        if(mapTypeId == val) return;
        setMapTypeId(val);
    }

    const center = useRecoilValue(centerState);
    const mapElement = useRef(null);

    const idfs = useRecoilValue(idfsState);
    const nowIdf = useRecoilValue(nowIdfState);
    const options = useRecoilValue(optionsState);
    const nowOption = useRecoilValue(nowOptionState);

    return(
        <>
            <NaverMap 
                mapTypeId={mapTypeId}
                defaultCenter={new navermaps.LatLng(center.lat, center.lng)}
            >
                {
                    idfs.map((idf, idx) => (
                        idf == nowIdf ? <></>
                        : <LineComponentNaver key={idf} idf={idf} navermaps={navermaps} option={options[idf]} />
                    ))
                }
                <LineComponentNaver idf={nowIdf} navermaps={navermaps} option={nowOption} />

            </NaverMap>
            <div ref={mapElement} style={{width : '100%', height : '100%'}}></div>
            <div className="flex absolute top-4 left-4">
                <Button className={`text-sm`} color={mapTypeId == navermaps.MapTypeId.NORMAL ? 'primary' : `primary_outline`} clickEvent={() => setMapTypeIdFunc(navermaps.MapTypeId.NORMAL)} value="일반" />
                <Button className={`text-sm`} color={mapTypeId == navermaps.MapTypeId.TERRAIN ? 'primary' : `primary_outline`} clickEvent={() => setMapTypeIdFunc(navermaps.MapTypeId.TERRAIN)} value="지형도" />
                <Button className={`text-sm`} color={mapTypeId == navermaps.MapTypeId.SATELLITE ? 'primary' : `primary_outline`} clickEvent={() => setMapTypeIdFunc(navermaps.MapTypeId.SATELLITE)} value="위성" />
                <Button className={`text-sm`} color={mapTypeId == navermaps.MapTypeId.HYBRID ? 'primary' : `primary_outline`} clickEvent={() => setMapTypeIdFunc(navermaps.MapTypeId.HYBRID)} value="혼합" />
            </div>
        </>
    )
}