import { useEffect, useState } from "react"
import { optionsState } from "../../states/pathDrawerState";

export default function LineComponent({ option, map }) {


    const makeLine = function() {
        // console.log(option.path)
        // console.log(option.arrows);

        let newpath = [];
        const len = option.path.length 
        option.path.map((c) =>{
            newpath.push(new kakao.maps.LatLng(c.lat,c.lng))
        })
        console.log(newpath)
        

        var polyline = new kakao.maps.Polyline({
            path : newpath,    
            ...option.lineOption
        })

        console.log(polyline)
        // polyline.setMap(map);
    }

    const makeCircle = function() {

    }
    

    useEffect(() => {
        makeLine();
        console.log(option);
    })

    return (
        <>

        </>
    )
}