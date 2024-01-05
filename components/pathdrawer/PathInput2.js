import { useRef, useState } from 'react'
import Button from '../common/Button'
import Input from '../common/Input';
import { useRecoilState } from 'recoil';
import { hoverEnableState, labelState } from '../states/pathDrawerState';

export default function PathInput({className, lngfirst, setLngfirst, focusOption, setFocusOption}) {
    let [path, setPath] = useState('');
    let [inputH, setInputH] = useState(40);
    let [hoverEnable, setHoverEnable] = useRecoilState(hoverEnableState);

    let [label, setLabel] = useRecoilState(labelState);
    let [inputboxColor, setInputboxColor] = useState('#FFFFFF');
    
    let [extend, setExtend] = useState(false);
    
    const textareaRef = useRef();

    const changeCircleRadius = function(val) {
        setFocusOption({...focusOption, radius : parseFloat(val)})
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

    const dragEnter = function() {
        setInputboxColor('#AAAAAA');
    }
    const dragLeave = function() {
        setInputboxColor('#FFFFFF');
    }
    const dragDrop = function(e) {
        setInputboxColor('#FFFFFF');
        e.preventDefault();
        const filerawdata = e.dataTransfer.files[0];
        console.log(filerawdata);

        const fReader = new FileReader();
        fReader.addEventListener('load', function(e) {
            var text = e.target.result;
            var decoder = new TextDecoder('utf-8');
            var decodedText = decoder.decode(new Uint8Array(text));

            // console.log(decodedText);
            setPath(decodedText);
        });
        fReader.readAsArrayBuffer(filerawdata);
    }

    const drawPath = function(pathString) {
        let newLine = {...emptyOption};
        if(!pathString) return;

        newLine.path = convertrawCoorditoCoordi(pathString);        
        newLine.arrows = makeArrow(newLine.path);
        newLine.label = label ? label : idfCount;

        setOptions({...options, [nowIdf] : nowOption, [idfCount] : newLine});
        // setOptions({...options, [idfCount] : newLine});
        setIdfs([...idfs, idfCount]);
        setNowIdf(idfCount);
        setNowOption(newLine);

        setIdfCount(idfCount + 1);

        if(newLine.path) {
            setCenter({ lat : newLine.path[0].lat, lng : newLine.path[0].lng})
        }
        setPath('');
    }

    return (
        <div className={`
            ${className}
        `}>
            <div className='flex'>
                <Button className={"my-2 ml-auto"} color="primary_outline" clickEvent={(e) => drawPath()} value="draw path"/>
            </div>
            <textarea 
                ref={textareaRef}
                className={`
                    w-full 
                    outline outline-1 outline-blue-200 
                    rounded p-2 text-sm
                `} 
                style={{
                    height : inputH,
                    backgroundColor : inputboxColor
                }}
                // rows="4"
                value={path}
                onChange={(e) => setPath(e.target.value)}

                // onClick={() => setInputH(200)}
                // onMouseLeave={() => inputLeave()}
                placeholder='input path'

                onDragEnter={() => dragEnter()}
                onDragLeave={() => dragLeave()}
                onDrop={(e) => dragDrop(e)}
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