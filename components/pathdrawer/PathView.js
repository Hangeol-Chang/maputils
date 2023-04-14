import { useEffect, useState } from "react";
import LineController from "./atoms/LineController";
import PathViewer from "./atoms/PathViewer";
import Tab from "./atoms/Tab";
import { useRecoilValue } from "recoil";
import { optionsState } from "../states/pathDrawerState";

export default function PathView({className, idfs, nowIdf, nowOption, clickCoordi, focusCoordi, changeNow, setNowOption, delLine }) {
    let options = useRecoilValue(optionsState);

    return (
        <div className={`${className}`}>
            <div className="flex flex-wrap gap-1 justify-items-center shadow">
                {
                    idfs.map((idf, idx) => (
                        <Tab key={idx} idf={idf} option={options[idf]} now={nowIdf} changeNow={changeNow}/>
                    ))
                }
            </div>
            <LineController option={nowOption} setNowOption={setNowOption} delLine={delLine} nowIdf={nowIdf} />
            <hr className="mx-1 my-4"/>

            <div className={`max-h-[400px] overflow-auto`}>
                <PathViewer path={nowOption.path} focusCoordi={focusCoordi} clickCoordi={clickCoordi} />
            </div>
        </div>
    )
}