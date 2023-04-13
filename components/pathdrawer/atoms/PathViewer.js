import { useEffect, useState } from "react";

export default function PathViewer({ path, focusCoordi, clickCoordi }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true) }, [])

    return mounted ? (
        <table className="w-full" >
            <tbody >
                { 
                    path.map(({lat, lng}, idx) => (
                        <tr key={idx}
                            className="text-center hover:bg-gray-200"
                            onPointerEnter={() => focusCoordi(lat, lng)} 
                            onPointerUp={() => clickCoordi(lat, lng)}
                        >
                            
                            <td className="w-1/5 bg-gray-600 text-white text-sm outline outline-1">{idx}</td>
                            <td className="w-2/5 px-1 text-sm">{lat}</td>
                            <td className="w-2/5 text-sm">{lng}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    ): <></>
}