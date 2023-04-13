import { useEffect, useState } from "react";
// import styles from '../../../styles/Slider.module.css'

export default function ColorSlider({ color="red" , value=0, changeColor, aColor, max, min, step}) {
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
                className={`w-full my-1 mx-1 cursor-pointer`}       
                max={max} min={min} step={step}

                style={{
                    WebkitAppearance : 'none',
                    appearance : 'none',
                    backgroundColor : color,
                    accentColor : color,
                    height : 4,
                    borderRadius : 50,
                }}
            />
        </div>
    )
}