import { useRef, useState } from 'react'
import Button from '../common/Button'
import Input from '../common/Input';
import { useRecoilState } from 'recoil';
import { hoverEnableState, labelState } from '../states/pathDrawerState';

export default function PathInput({className, drawPath, lngfirst, setLngfirst, focusOption, setFocusOption}) {
    let [path, setPath] = useState('');
    let [inputH, setInputH] = useState(40);
    let [hoverEnable, setHoverEnable] = useRecoilState(hoverEnableState);

    let [label, setLabel] =useRecoilState(labelState);

    let [extend, setExtend] = useState(false);
    
    const textareaRef = useRef();

    const changeCircleRadius = function(val) {
        setFocusOption({...focusOption, radius : parseFloat(val)})
    }

    const drawPathFull = function() {
        drawPath(path);
        setPath('');
    }
    
    const inputLeave = function() {
        textareaRef.current.blur();
        setInputH(40);
    }

    const extendControl = function() {
        if (extend) {
            setInputH(40);
        }
        else {
            setInputH(140);
        }
        setExtend(!extend);
    }

    return (
        <div className={`
            ${className}
        `}>
            <div className='flex'>
                <Button className={"my-2 ml-auto"} color="primary_outline" clickEvent={(e) => drawPathFull()} value="draw path"/>
            </div>
            <textarea 
                ref={textareaRef}
                className={`
                    w-full 
                    outline outline-1 outline-blue-200 
                    rounded p-2 text-sm
                `} 
                style={{
                    height : inputH
                }}
                // rows="4"
                value={path}
                onChange={(e) => setPath(e.target.value)}

                // onClick={() => setInputH(200)}
                // onMouseLeave={() => inputLeave()}
                placeholder='input path'
            >
            </textarea>
            <Button className="absolute right-5" color="gray" value={extend ? "△" : "▽"} clickEvent={(e) => extendControl()}/>

            <Input type="text" placeholder="label" width="full" value={label} onChange={(e) => setLabel(e.target.value)}/>
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
                    <label >lng first</label>
                </div>

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
                    className={`text-sm`}
                />
            </div>
        </div>
    )
}