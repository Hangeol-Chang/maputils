import { useEffect, useState } from "react";
import LineController from "./atoms/LineController";
import PathViewer from "./atoms/PathViewer";
import Tab from "./atoms/Tab";
import { useRecoilValue } from "recoil";
import { optionsState } from "../states/pathDrawerState";
import Button from "../common/Button";

export default function PathView({className, idfs, nowIdf, nowOption, clickCoordi, focusCoordi, changeNow, setNowOption, delLine }) {
    let options = useRecoilValue(optionsState);

    return (
        <div className={`${className}`}>
            <Button className="w-[236px] mb-2 text-sm" color="primary_outline" value="delete line" clickEvent={delLine}/>
            
            <div className="flex flex-wrap gap-1 justify-items-center shadow">
                {
                    idfs.map((idf, idx) => (
                        <Tab key={idx} idf={idf} option={options[idf]} now={nowIdf} changeNow={changeNow}/>
                    ))
                }
            </div>

            <LineController option={nowOption} setNowOption={setNowOption} nowIdf={nowIdf} />
            <hr className="mx-1 my-4"/>

            <div className={`max-h-[400px] overflow-auto`}>
                <PathViewer path={nowOption.path} focusCoordi={focusCoordi} clickCoordi={clickCoordi} />
            </div>
        </div>
    )
}