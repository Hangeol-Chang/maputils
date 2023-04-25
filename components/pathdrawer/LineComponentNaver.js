import { useEffect, useState } from "react"
import { Polyline } from "react-naver-maps"

export default function LineComponentNaver({ idf, option, navermaps }) {
    const [path, setPath] = useState([])

    useEffect(() => {
        let tmppath = []
        option.path.map((g) => {
            tmppath.push(new navermaps.LatLng(g.lat, g.lng))
        })
        setPath(tmppath)
    }, [])

    // useEffect(() => {
    //     if(!option) return;

    //     option.path.map(g => (
    //         console.log(g)
    //     ))
    // }, [option])

    return (
        <>
            <Polyline 
                path={path}
            />
        </>
    )
}