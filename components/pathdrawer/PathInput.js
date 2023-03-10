import { useState } from 'react'
import Button from '../common/Button'
import Input from '../common/Input';
import { useRecoilState } from 'recoil';
import { hoverEnableState } from '../states/pathDrawerState';

export default function PathInput({className, drawPath, lngfirst, setLngfirst, focusOption, setFocusOption, setLabel}) {
    let [path, setPath] = useState('');
    let [hoverEnable, setHoverEnable] = useRecoilState(hoverEnableState);

    const changeCircleRadius = function(val) {
        setFocusOption({...focusOption, radius : parseFloat(val)})
    }

    return (
        <div className={`
            ${className}
        `}>
            <textarea className="w-full outline outline-1 rounded outline-blue-200" rows="4"
                value={path}
                onChange={(e) => setPath(e.target.value)}
            >
            </textarea>
            <Input type="text" placeholder="label" width="full" onChange={(e) => setLabel(e.target.value)}/>

            <div className="flex justify-between">
                {/* <div>
                    <input type="checkbox" id="hhmmddd" className="mr-1"/>
                    <label for="hhmmddd">hmd</label>
                </div> */}

                <div>
                    <input type="checkbox" id="lngf" className="mr-1" 
                        defaultValue={lngfirst}
                        onChange={(e) => setLngfirst(e.target.value)}    
                    />
                    <label for="lngf">lng first</label>
                </div>
                <Button color="primary_outline" clickEvent={(e) => drawPath(path)} value="draw path"/>

            </div>
            <div className="flex">
                <div className='text-sm m-auto'>
                    p_size
                </div>
                <input id="slider" type="range" 
                    defaultValue={1}
                    onPointerUp={(e) => changeCircleRadius(e.target.value)}
                    className={`w-full cursor-pointer accent-gray-400`}
                    max={0.5} min={0} step={0.1}
                />            
                <Button 
                    color={hoverEnable ? "primary" : "primary_outline"} 
                    value={hoverEnable ? "enabled" : "disabled"}
                    clickEvent={() => setHoverEnable(!hoverEnable)}
                    className={``}
                />
            </div>
        </div>
    )
}