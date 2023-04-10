import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Button from "../../common/Button";
import { nowOptionState } from "../../states/pathDrawerState";
import ColorSlider from "./ColorSlider";

export default function LineController({ option, delLine, setNowOption, nowIdf }) {

    let [radius, setRadius] = useState(1);
    let [circleOption, setCircleOption] = useState(option.circleOption);

    // lineOption에 line, arrow를 통합
    let [lineOption, setLineOption]     = useState({ lineOption : option.lineOption, arrowOption : option.arrowOption });
    // let [arrowOption, setArrowOption]   = useState(option.arrowOption);
    let [viewLine, setViewLine]         = useState(true);
    let [viewMarker, setViewMarker]     = useState(false);
    let [viewArrow, setViewArrow]       = useState(true);

    function changeCircleRadius(val) { setCircleOption({...circleOption, radius : parseFloat(val)}) }

    // 색 바꾸는 함수
    const changeCircleColor = function(val, idf) {
        let tmpColor = option.circleOption.fillColor;
        let binColor = ("0" + parseInt(val).toString(16)).slice(-2);
    
        let idx = -1;
        if(idf == "red")        idx = 1;
        else if(idf == "green") idx = 3;
        else                    idx = 5;

        let color = tmpColor.substring(0, idx) + binColor + tmpColor.substring(idx + 2);
        setCircleOption({...circleOption, fillColor : color, [idf] : parseInt(val)})
    }

    const changeLineColor = function(val, idf) {
        let tmpColor = lineOption.lineOption.strokeColor;
        let binColor = ("0" + parseInt(val).toString(16)).substr(-2);

        let idx = -1;
        if(idf == "red")        idx = 1;
        else if(idf == "green") idx = 3;
        else                    idx = 5;

        let color = tmpColor.substring(0, idx) + binColor + tmpColor.substring(idx + 2);
        setLineOption({
            lineOption : {
                ...lineOption.lineOption,
                strokeColor : color, [idf] : parseInt(val)
            },
            arrowOption : {
                ...lineOption.arrowOption,
                strokeColor : color, [idf] : parseInt(val)
            } 
        });
        // setArrowOption({...arrowOption, strokeColor : color, [idf] : parseInt(val)})
    }

    // view 상태 변경 함수
    const changeViewLine = function(check) {
        setViewLine(check);
        setLineOption({
            lineOption : {
                ...lineOption.lineOption,
                visible : check
            },
            arrowOption : lineOption.arrowOption
        });
    }

    const changeViewMarker = function(check) {
        setViewMarker(check); 
        setCircleOption({...circleOption, visible : check});
    }

    const changeViewArrow = function(check) {
        setViewArrow(check);
        // setArrowOption({...arrowOption, visible : check});
        setLineOption({
            lineOption : lineOption.lineOption,
            arrowOption : {
                ...lineOption.arrowOption,
                visible : check
            }
        })
    }

    // 옵션 동기처리
    useEffect(() => {
        // setNowOption({...option, lineOption, circleOption, arrowOption})
        setNowOption({
            ...option, 
            lineOption : lineOption.lineOption, 
            circleOption : circleOption, 
            arrowOption : lineOption.arrowOption
        });
    // }, [lineOption, circleOption, arrowOption]);
    }, [lineOption, circleOption]);

    // parent 함수 변경함수
    useEffect(() => {
        setLineOption({lineOption : option.lineOption, arrowOption : option.arrowOption });
        setCircleOption(option.circleOption);
        setViewLine(option.lineOption.visible);
        setViewMarker(option.circleOption.visible);
        setViewArrow(option.arrowOption.visible);

    }, [nowIdf])

    return lineOption.lineOption ? (
        <div className="mt-4">
            <div className="flex">
                <Button color="primary_outline" value="del" clickEvent={delLine}/>
            </div>

            <div className="flex my-2">
                <div className="w-1/2 m-auto">
                    <input type="checkbox" id="viewMarker" checked={viewMarker} onClick={(e) => changeViewMarker(e.target.checked)} className="mr-1"/>
                    <label for="viewMarker">Mark</label>
                </div>
                <div className="flex-column">
                    <div className="flex">
                        <ColorSlider color="red"   aColor="accent-red-400" value={circleOption.red} changeColor={changeCircleColor} />
                        <ColorSlider color="green" aColor="accent-green-400" value={circleOption.green} changeColor={changeCircleColor} />
                        <ColorSlider color="blue"  aColor="accent-blue-400" value={circleOption.blue} changeColor={changeCircleColor} />
                    </div>
                    <input id="slider" type="range" 
                        defaultValue={1}
                        onPointerUp={(e) => changeCircleRadius(e.target.value)}
                        className={`w-full cursor-pointer accent-gray-400`}
                        max={2} min={0} step={0.1}
                    />
                </div>
            </div>

            <div className="flex my-2">
                <div className="w-1/2">
                    <input type="checkbox" id="viewLine" checked={viewLine} onClick={(e) => changeViewLine(e.target.checked)} className="mr-1"/>
                    <label for="viewLine">Line</label>
                </div>
                <div className="flex-column">
                    <div className="flex">
                        <ColorSlider color="red"   aColor="accent-red-400" value={lineOption.lineOption.red} changeColor={changeLineColor} />
                        <ColorSlider color="green" aColor="accent-green-400" value={lineOption.lineOption.green} changeColor={changeLineColor} />
                        <ColorSlider color="blue"  aColor="accent-blue-400" value={lineOption.lineOption.blue} changeColor={changeLineColor} />
                    </div>
                    <input id="slider" type="range" 
                        defaultValue={1}
                        onPointerUp={() => {}}
                        className={`w-full cursor-pointer accent-gray-400`}
                        max={2} min={0} step={0.1}
                    />
                </div>
            </div>
            
            {/* arrow 색 변경 추가 예정 */}

            <div className="flex justify-between">
                <div>
                    <input type="checkbox" id="viewArrow" checked={viewArrow} onClick={(e) => changeViewArrow(e.target.checked)} className="mr-1"/>
                    <label for="viewArrow">Arrow</label>
                </div>
                <input id="slider" type="range" 
                        defaultValue={1}
                        onPointerUp={() => {}}
                        className={`w-full cursor-pointer accent-gray-400`}
                        max={2} min={0} step={0.1}
                    />
            </div>
        </div>
    )
    : <></>
}   