import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { editLineState } from "../../states/pathDrawerState";

export default function EditPathViewer({ focusCoordi, clickCoordi }) {
    const [mounted, setMounted] = useState(false);
    const path = useRecoilValue(editLineState);

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
                            <td className="w-1/2 px-1 text-sm">{lat}</td>
                            <td className="w-1/2 text-sm">{lng}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    ): <></>
}