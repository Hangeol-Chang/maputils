import { useEffect, useState } from "react"

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
            <div className="text-center w-full align-middle px-2">
                {option.label}
            </div>
            <div className="flex-col">
                {/* <div className={`w-3 h-2`} style={{backgroundColor : option.circleOption.visibie ? option.circleOption.fillColor : '#FFFFFF'}} /> */}
                <div className={`w-3 h-2`} style={{backgroundColor : option.circleOption.fillColor}} />
                <div className={`w-3 h-2`} style={{backgroundColor : option.lineOption.visible ? option.lineOption.strokeColor : '#FFFFFF'}} />
                <div className={`w-3 h-2`} style={{backgroundColor : option.arrowOption.visible ? option.arrowOption.strokeColor : '#FFFFFF'}} />
            </div>
        </div>
    )
}