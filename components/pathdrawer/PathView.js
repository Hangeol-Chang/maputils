import { useEffect, useState } from "react";
import LineController from "./atoms/LineController";
import PathViewer from "./atoms/PathViewer";
import Tab from "./atoms/Tab";

export default function PathView({className, idfs, nowIdf, nowOption, focusCoordi, changeNow, setNowOption, delLine }) {
    return (
        <div className={`
            ${className}
            
        `}>
            <div className="flex gap-1 justify-items-center shadow">
                {
                    idfs.map((idf, idx) => (
                        <Tab key={idx} idf={idf} now={nowIdf} changeNow={changeNow}/>
                    ))
                }
            </div>
            <LineController option={nowOption} setNowOption={setNowOption} delLine={delLine} nowIdf={nowIdf} />
            <hr className="mx-1 my-4"/>

            <div className={`max-h-[700px] overflow-auto`}>
                <PathViewer path={nowOption.path} focusCoordi={focusCoordi} />
            </div>
        </div>
    )
}