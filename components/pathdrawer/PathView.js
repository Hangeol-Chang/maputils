import { useEffect, useState } from "react";
import LineController from "./atoms/LineController";
import PathViewer from "./atoms/PathViewer";
import Tab from "./atoms/Tab";
import { useRecoilValue } from "recoil";
import { nowOptionState, optionsState } from "../states/pathDrawerState";
import Button from "../common/Button";
import EditPathViewer from "./atoms/EditPathViewer";

export default function PathView({className, idfs, nowIdf, nowOption, setNowOption, clickCoordi, focusCoordi, changeNow, delLine }) {
    let options = useRecoilValue(optionsState);
    const [isEdit, setIsEdit] = useState(false);

    let editOption = {
        label : 'EDIT',
        circleOption : { fillColor : '#AAAAAA', },
        lineOption : { strokeColor : '#AAAAAA', },
        arrowOption : { strokeColor : '#AAAAAA', }
    }
    
    const selectEdit = function() {
        setIsEdit(true);
    }
    const changeNowF = function(idf) {
        setIsEdit(false);
        changeNow(idf);
    }

    return (
        <div className={`${className}`}>
            <Button className="w-[236px] mb-2 text-sm" color="primary_outline" value="delete line" clickEvent={delLine}/>
            
            <div className="flex flex-wrap gap-1 justify-items-center shadow">
                <Tab idf={-2} option={editOption} now={nowIdf} changeNow={selectEdit} />
                {
                    idfs.map((idf, idx) => (
                        <Tab key={idx} idf={idf} option={options[idf]} now={nowIdf} changeNow={changeNowF}/>
                    ))
                }
            </div>

            <LineController option={nowOption} setNowOption={setNowOption} nowIdf={nowIdf} />
            <hr className="mx-1 my-4"/>
            
            
            <div className={`max-h-[400px] overflow-auto`}>
                {
                    isEdit 
                    ? <EditPathViewer focusCoordi={focusCoordi} clickCoordi={clickCoordi} />
                    : <PathViewer path={nowOption.path} focusCoordi={focusCoordi} clickCoordi={clickCoordi} />
                }
            </div>
        </div>
    )
}