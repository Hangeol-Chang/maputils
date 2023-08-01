import { useEffect, useState } from "react"
import { Circle, Marker, Polyline } from "react-naver-maps"

export default function LineComponentNaver({ idf, option, navermaps }) {
    const [path, setPath] = useState([])
    const [arrowPath, setArrowPath] = useState([])

    useEffect(() => {

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
            console.log(tmparrows);
        }

        console.log(option.circleOption.visible)
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

            {
                path.map((coordi) => {
                    <Circle
                        center={coordi}
                        radius={option.circleOption.radius}
                        fillColor={option.circleOption.fillColor}
                        fillOpacity={option.circleOption.fillOpacity}
                        visible={option.circleOption.visible}
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
                        visible={option.arrowOption.visible}
                    />
                })
            }
        </>
    )
}