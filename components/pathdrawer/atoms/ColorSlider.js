import { useState } from "react";

export default function ColorSlider({ color="red" , value=50, changeColor}) {

    return(
        <div className="flex align-contents-center">
            <input id="slider" type="range" 
                defaultValue={value}
                onPointerUp={() => changeColor(value, color)}
                className={`w-full cursor-pointer accent-${color}-400`}
                max={255} min={0}
            />
        </div>
        // <Slider
        //     sx={{ color: props.color, mx:1 }} value={color} 
        //     defaultValue={0} min={0} max={255}
        //     valueLabelDisplay="auto"
        //     onChange={(e) => setColor(e.target.value)}
        //     onChangeCommitted={() => props.setColor(color, props.idf)}
        // />
    )
}