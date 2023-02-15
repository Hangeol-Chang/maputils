import { useEffect, useState } from "react";

export default function PathViewer({ path, focusCoordi }) {
    const focus = function(lat, lng) { focusCoordi(lat, lng); }
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true) }, [])

    return mounted ? (
        <table className="w-full">
            { 
                path.map(({lat, lng}, idx) => (
                    <tr onPointerEnter={() => focus(lat, lng)} className="text-center hover:bg-gray-200">
                        <td className="w-1/5">{idx}</td>
                        <td className="w-2/5">{lat}</td>
                        <td className="w-2/5">{lng}</td>
                    </tr>
                ))
            }
        </table>
    ): <></>
}