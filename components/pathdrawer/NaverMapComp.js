import { useRecoilState, useRecoilValue } from "recoil";
import { centerState, editArrowState, editLineState, idfsState, nowIdfState, nowOptionState, optionsState } from "../states/pathDrawerState";
import { useEffect, useRef, useState } from "react";
import Button from "../common/Button";
import { Listener, NaverMap, Polyline, useListener, useNavermaps } from "react-naver-maps"
import LineComponentNaver from "./LineComponentNaver";
import LineComponentNaverEdit from "./LineComponentNaverEdit";

export default function NaverMapComp() {
    const navermaps = useNavermaps();
    const [mapTypeId, setMapTypeId] = useState(navermaps.MapTypeId.NORMAL);
    const [map, setMap] = useState(null);

    const [editLine, setEditLine] = useRecoilState(editLineState);
    const [editArrow, seteditArrow] = useRecoilState(editArrowState);

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

    useEffect(() => {
        if(map) {
            map.setCenter(center)
        }
    }, [center])

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

    useEffect(() => {
        seteditArrow(makeArrow(editLine));
    }, [editLine])
    

    const mapRightClick = function(event) {
        console.log(event.coord._lat, event.coord._lng);
        let tmpeditline = [...editLine]
        tmpeditline.push({lat : event.coord._lat, lng : event.coord._lng})

        setEditLine(tmpeditline);
    }

    return(
        <>
            <NaverMap 
                mapTypeId={mapTypeId}
                defaultCenter={new navermaps.LatLng(center.lat, center.lng)}
                ref={setMap}
            >
                <Listener 
                    type="rightclick"
                    listener={(e) => mapRightClick(e)}
                />
                {
                    idfs.map((idf, idx) => (
                        idf == nowIdf ? <></>
                        : <LineComponentNaver key={idf} idf={idf} navermaps={navermaps} option={options[idf]} />
                    ))
                }
                <LineComponentNaverEdit navermaps={navermaps}
                    oripath={[]}
                    oriArrowPath={[]}
                />
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