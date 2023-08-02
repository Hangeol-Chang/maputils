import { useEffect, useState } from "react"
import { Circle, Marker, Polyline } from "react-naver-maps"
import { useRecoilValue } from "recoil"
import { nowIdfState } from "../states/pathDrawerState"

export default function LineComponentNaver({ idf, option, navermaps }) {
    const [path, setPath] = useState([])
    const [arrowPath, setArrowPath] = useState([])

    const nowIdf = useRecoilValue(nowIdfState);

    useEffect(() => {

        console.log(option)

        if(path.length == 0 && option.path.length != 0) {
            let tmppath = []
            option.path.map((g) => {
                tmppath.push(new navermaps.LatLng(g.lat, g.lng))
            })
            setPath(tmppath)
        } 

        if(arrowPath.length == 0 && option.arrows.length != 0) {
            const arrows = option.arrows;
    
            let tmparrows = [];
            arrows.map((arrow) => {
                let one = [] 
                arrow.map((g) => {
                    one.push(new navermaps.LatLng(g.lat, g.lng))
                })
                tmparrows.push(one)
            })
            setArrowPath(tmparrows);
        }
    }, [option])

    return (
        <>
            <Polyline
                path={path}
                strokeColor={option.lineOption.strokeColor}
                strokeWeight={option.lineOption.strokeWeight}
                strokeOpacity={option.lineOption.strokeOpacity}
                visible={option.lineOption.visible}
            />

            {/* navermap 에서, map 함수 쓸 시 렌더일이 안되는 버그 존재. */}
            {
                path.map((coordi, idx) => {
                    <Circle
                        key={idx*2}
                        center={coordi}
                        radius={option.circleOption.radius}
                        fillColor={option.circleOption.fillColor}
                        fillOpacity={option.circleOption.fillOpacity}
                        visible={true}
                    />
                })
            }

            {
                arrowPath.map((arrows) => {
                    <Polyline
                        path={arrows}
                        strokeColor={option.arrowOption.strokeColor}
                        strokeWeight={option.arrowOption.strokeWeight}
                        strokeOpacity={option.arrowOption.strokeOpacity}
                        visible={true}
                    />
                })
            }
        </>
    )
}