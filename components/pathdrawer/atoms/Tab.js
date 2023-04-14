import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil";
import { optionsState } from "../../states/pathDrawerState";

export default function Tab({ idf, now, changeNow, option }) {
    let [checked, setChecked] = useState(``);

    useEffect(() => {
        if (idf == now) {
            setChecked(`
                bg-white
                text-black
                shadow-md
            `);
        }
        else setChecked(`
            bg-gray-200
            text-gray-600
        `);
    }, [now])
    
    return (
        <div className={`
            ${checked}
            flex justify-between
            min-w-[15%] h-6 text-center align-middle
            cursor-pointer
        `}
            onClick={() => changeNow(idf)}
        >
            <div className="text-center w-full align-middle">
                {option.label}
            </div>
            <div className="flex-col">
                <div className={`w-3 h-2`} style={{backgroundColor : option.lineOption.strokeColor}} />
                <div className={`w-3 h-2`} style={{backgroundColor : option.arrowOption.strokeColor}} />
                <div className={`w-3 h-2`} style={{backgroundColor : option.circleOption.fillColor}} />
            </div>
        </div>
    )
}