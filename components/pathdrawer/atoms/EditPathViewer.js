import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Button from "../../common/Button";
import { editLineState } from "../../states/pathDrawerState";

export default function EditPathViewer({ focusCoordi, clickCoordi }) {
    const [mounted, setMounted] = useState(false);
    const path = useRecoilValue(editLineState);
    const [filename, setFilename] = useState('path');

    const exportPath = function() {
        let stringpath = '';

        path.map(coordi => {
            stringpath += coordi.lat + '\t' + coordi.lng + '\n';
        })

        let fileName = `${filename}.txt`;
        const element = document.createElement('a');
        const file = new Blob([stringpath], {
            type: 'text/plain',
        });
        element.href = URL.createObjectURL(file);
        element.download = fileName;
        document.body.appendChild(element); // FireFox
        element.click();

        document.body.removeChild(element);
    }

    useEffect(() => { setMounted(true) }, [])

    return mounted ? (
        <div className="w-full">
            <div className="flex w-fit">
                <input className="w-1/2 border-2 rounded" value={filename} onChange={(e) => setFilename(e.target.value)}/>
                <Button className={`text-sm`} color='primary_outline' value='export' clickEvent={exportPath}/>
            </div>

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
        </div>
    ): <></>
}