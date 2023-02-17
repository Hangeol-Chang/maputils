import { useEffect, useState } from "react";

export default function PathViewer({ path, focusCoordi }) {
    const focus = function(lat, lng) { focusCoordi(lat, lng); }
    const [mounted, setMounted] = useState(false);

    useEffect(() => { setMounted(true) }, [])

    return mounted ? (
        <table className="w-full" >
            <tbody >

                { 
                    path.map(({lat, lng}, idx) => (
                        <tr onPointerEnter={() => focus(lat, lng)} key={idx} className="text-center hover:bg-gray-200">
                            <td className="w-1/5 bg-gray-600 text-white outline outline-1">{idx}</td>
                            <td className="w-2/5 px-1">{lat}</td>
                            <td className="w-2/5">{lng}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    ): <></>
}