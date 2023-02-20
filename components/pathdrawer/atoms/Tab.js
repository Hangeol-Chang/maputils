import { useEffect, useState } from "react"

export default function Tab({ idf, now, changeNow }) {
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
            w-1/5 h-8 text-center align-middle
            
            cursor-pointer
        `}
            onClick={() => changeNow(idf)}
        >
            {idf}
        </div>
    )
}