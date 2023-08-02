import { useEffect, useState } from "react"
import { Circle, Polyline } from "react-naver-maps"
import { useRecoilState, useRecoilValue } from "recoil"
import { editArrowState, editLineState, emptyOptionState } from "../states/pathDrawerState"

// 
export default function LineComponentNaverEdit({ navermaps }) {
    
    const oriPath = useRecoilValue(editLineState);
    const oriArrowPath = useRecoilValue(editArrowState);

    const [path, setPath] = useState([]);
    const [arrowPath, setArrowPath] = useState([]);

    const lineOption = {
        strokeOpacity: 0.8, strokeWeight: 1.5,
        clickable: false, draggable: false,
        editable: false, visible: true, zIndex: 1,
        strokeColor: "#0000FF",
        red : 0, green : 0, blue : 255
    };
    
    const circleOption = {
        strokeOpacity : 0, fillOpacity: 0.4,
        clickable: false, draggable: false,
        editable: false, visible: true,
        radius: 1, zIndex: 1,
        fillColor: "#FF0000",
        red : 255, green : 0, blue : 0
    };
    
    // const arrowOption = {
    //     strokeOpacity: 0.9, strokeWeight: 1.5,
    //     clickable: false, draggable: false,
    //     editable: false, visible: false, zIndex: 1,
    //     strokeColor: "#0000FF",
    //     red : 0, green : 0, blue : 255
    // };
    
    useEffect(() => {
        if(oriPath.length != 0) {
            let tmppath = []
            oriPath.map((g) => {
                tmppath.push(new navermaps.LatLng(g.lat, g.lng));
            });
            setPath(tmppath)
        }
        else {
            setPath([new navermaps.LatLng(34.44, 127.89)]);
        }
    }, [oriPath])

    useEffect(() => {
        if(oriArrowPath.length != 0) {
            let tmppath = []
            oriArrowPath.map((arrow) => {
                let one = [];
                arrow.map((g) => {
                    one.push(new navermaps.LatLng(g.lat, g.lng));
                });
                tmppath.push(one);
            })
            setArrowPath(tmppath);
        }
    }, [oriArrowPath])

    return (
        <>
            <Polyline 
                path={path}
                strokeColor={lineOption.strokeColor}
                strokeWeight={lineOption.strokeWeight}
                strokeOpacity={lineOption.strokeOpacity}
            />

            {
                path.map((coordi) => {
                    <Circle
                        center={coordi}
                        radius={circleOption}
                        fillColor={circleOption.fillColor}
                        fillOpacity={circleOption.fillOpacity}
                    />
                })
            }
            {/* {
                arrowPath.map((arrows) => {
                    <Polyline
                        path={arrows}
                        strokeColor={arrowOption.strokeColor}
                        strokeWeight={arrowOption.strokeWeight}
                        strokeOpacity={arrowOption.strokeOpacity}
                        visible={arrowOption.visible}
                    />
                })
            } */}
        </>
    )
}