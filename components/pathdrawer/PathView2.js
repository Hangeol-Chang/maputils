import { useEffect, useState } from "react";
import LineController from "./atoms/LineController";
import PathViewer from "./atoms/PathViewer";
import Tab from "./atoms/Tab";
import { useRecoilState, useRecoilValue } from "recoil";
import Button from "../common/Button";
import EditPathViewer from "./atoms/EditPathViewer";
import { centerState, idfsState, nowIdfState, nowOptionState, optionsState } from "../../states/pathDrawerState";

export default function PathView({ className }) {

    const [isEdit, setIsEdit] = useState(false);
    
    const idfs = useRecoilValue(idfsState);
    const [options, setOptions] = useRecoilState(optionsState);
    
    const [nowIdf, setNowIdf] = useRecoilState(nowIdfState);
    const [nowOption, setNowOption] = useRecoilState(nowOptionState);

    const [ , setCenter] = useRecoilState(centerState);

    let editOption = {
        label : 'EDIT',
        circleOption : { fillColor : '#AAAAAA', },
        lineOption : { strokeColor : '#AAAAAA', },
        arrowOption :{ strokeColor : '#AAAAAA', }
    }
    
    const selectEdit = function() {
        setIsEdit(true);
    }

    // nowIdf 에 해당하는 line 지우기
    const delLine = function() {
        const prevIdf = nowIdf;

        if(idfs.length > 1) {
            if (prevIdf != idfs[0]) setNowIdf(idfs[0]);
            setNowOption(options[idfs[0]]);

            let tmpOptions = {...options};
            delete tmpOptions[prevIdf];
            setOptions(tmpOptions);
            setIdfs(idfs.filter((v) => v != prevIdf));
        }
        else{
            setNowIdf(-1);
            setNowOption({
                ...iniOption,
                path : [],
                arrows : [],
            });
            setIdfs([]);
            setOptions({});
        }
    }

    const focusCoordi = function(lat, lng) {
        if(hoverEnable) {
            setCenter({lat : lat, lng : lng})
            // setFocus({lat : lat, lng : lng})
        }
    }

    const clickCoordi = function(lat, lng) {
        setCenter({lat : lat, lng : lng})
        setFocus({lat : lat, lng : lng})
    }

    const changeNow = function(idf) {
        setIsEdit(false);
        
        if(idf == nowIdf) return;

        setOptions({...options, [nowIdf] : nowOption})
        setNowIdf(idf)
        setNowOption(options[idf])
    }

    return (
        <div className={`${className}`}>
            <Button className="w-[236px] mb-2 text-sm" color="primary_outline" value="delete line" clickEvent={delLine}/>
            
            <div className="flex flex-wrap gap-1 justify-items-center shadow">
                <Tab idf={-2} option={editOption} now={nowIdf} changeNow={selectEdit} />
                {
                    idfs.map((idf, idx) => (
                        <Tab key={idx} idf={idf} option={options[idf]} now={nowIdf} changeNow={changeNow}/>
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