import { useEffect, useState } from "react";

export default function ColorSlider({ color="red" , value=0, changeColor, aColor}) {

    let [cvalue, setCvalue] = useState(value);
    useEffect(() => {
        setCvalue(value);
    }, [value])

    return(
        <div className="flex align-contents-center">
            <input id="slider" type="range" 
                value={cvalue}
                onChange={(e) => setCvalue(e.target.value)}

                onPointerUp={(e) => changeColor(e.target.value, color)}
                className={`w-full cursor-pointer ${aColor}`}
                max={255} min={0}
            />
        </div>
    )
}